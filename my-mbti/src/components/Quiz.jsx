import { useMemo, useState, useCallback, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import { scenarios } from '../assets/scenarios';
import './Results.css';

export default function Quiz({setCurrentPage, setScore}) {
    const [node, setNode] = useState(scenarios['start']);
    const [stepCount, setStepCount] = useState(1);
    const [isEntering, setIsEntering] = useState(true);
    const [mascotAnim, setMascotAnim] = useState('bob');
    const [mascotXY, setMascotXY] = useState({ x: 0, y: 0 });
    const [selectedSegIndex, setSelectedSegIndex] = useState(null);
    const wrapperRef = useRef(null);
    const segRefs = useRef([]);

    const dichotomyLabel = useMemo(() => {
      if (typeof node.dichotomy !== 'number') return '—';
      const map = {
        0: 'Extraversion ⟷ Introversion',
        1: 'Sensing ⟷ Intuition',
        2: 'Thinking ⟷ Feeling',
        3: 'Judging ⟷ Perceiving',
      };
      return map[node.dichotomy] ?? '—';
    }, [node]);

    const handleChoice = useCallback((choice) => {
      if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        try { navigator.vibrate(12); } catch { /* ignore vibration errors on unsupported devices */ }
      }
      if (choice.id === 'end') return setCurrentPage('end');
      if (choice.score > 0) {
        setScore(prev => {
          const newScore = [...prev];
          newScore[node.dichotomy] += choice.score;
          return newScore;
        });
      }
      setNode(scenarios[choice.next]);
      setStepCount(prev => prev + 1);
    }, [node, setCurrentPage, setScore]);

    // Likert detection without labels: treat 5-choice nodes as Likert
    const isLikert = useMemo(() => (node?.choices?.length ?? 0) === 5, [node]);
    const choicesList = useMemo(() => node?.choices ?? [], [node]);
    // No keyboard navigation: mobile-first interactions

    // Trigger scene entrance wipe when node changes
    useEffect(() => {
      setIsEntering(true);
      const t = setTimeout(() => setIsEntering(false), 260);
      return () => clearTimeout(t);
    }, [node]);

    const moveMascotToIndex = useCallback((index) => {
      const container = wrapperRef.current;
      const target = segRefs.current[index];
      if (!container || !target) return;
      const cRect = container.getBoundingClientRect();
      const tRect = target.getBoundingClientRect();
      const mascotWidth = 36;
      const mascotHeight = 36;
      const centerX = tRect.left + tRect.width / 2;
      const bottomY = tRect.bottom;
      const x = centerX - cRect.left - mascotWidth / 2;
      const y = bottomY - cRect.top - mascotHeight / 2;
      setMascotXY({ x, y });
    }, []);

    // Position mascot to middle segment initially for Likert bars, and remember selection
    useEffect(() => {
      if (!isLikert) return;
      const center = Math.floor((choicesList.length - 1) / 2);
      setSelectedSegIndex(center);
      requestAnimationFrame(() => moveMascotToIndex(center));
    }, [isLikert, choicesList.length, moveMascotToIndex]);

    // Reposition mascot on resize/orientation change
    useEffect(() => {
      const onResize = () => {
        if (!isLikert) return;
        const idx = selectedSegIndex != null ? selectedSegIndex : Math.floor((choicesList.length - 1) / 2);
        requestAnimationFrame(() => moveMascotToIndex(idx));
      };
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }, [isLikert, choicesList.length, selectedSegIndex, moveMascotToIndex]);

    return (
      <Container
        fluid
        className="jrpg-screen d-flex flex-column vh-100 scanline"
      >
        {/* Heads-Up Display */}
        <Row className="m-2">
          <Col xs={12} className="d-flex justify-content-between align-items-center retro-hud">
            <div className="hud-badge monospace">Chapter {stepCount}</div>
            <div className="hud-meter">
              <span className="hud-label">HP</span>
              <span className="hearts" aria-hidden>♥♥♥</span>
            </div>
            <div className="hud-badge d-none d-sm-block monospace">{dichotomyLabel}</div>
          </Col>
        </Row>

        {/* TOP ROW: narrative/dialogue */}
        <Row className="justify-content-center m-auto">
          <Col xs={12}>
            <Card className="jrpg-panel dialogue-box">
              <Card.Body className="text-center">
                <Card.Text className="dialogue-text">
                  {node.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center m-auto">
          <Col xs={12}>
            <div className={`pixel-frame scene-wipe ${isEntering ? 'entering' : ''}`}>
              <Image src={`/${node.bg}`} alt="Scene" fluid style={{width: 'auto', maxHeight: '50vh'}}/>
            </div>
          </Col>
        </Row>
      
        {/* PUSH the next row down */}
        <Row className="m-auto justify-content-center sticky-choices">
          <Col xs={12}>
            {isLikert ? (
              <div className="likert-wrapper position-relative" ref={wrapperRef}>
                <div className="likert-legend monospace">Least likely ⟶ Most likely</div>
                <div className="likert-bar">
                  {choicesList.map((choice, index) => {
                    const rankClass = `rank-${index + 1}`;
                    return (
                      <button
                        key={`likert-${index}`}
                        type="button"
                        className={`likert-segment ${rankClass}`}
                        aria-label={`Choice ${index + 1}`}
                        ref={(el) => { segRefs.current[index] = el; }}
                        onMouseEnter={() => moveMascotToIndex(index)}
                        onTouchStart={() => moveMascotToIndex(index)}
                        onClick={() => {
                          setMascotAnim('jump');
                          setSelectedSegIndex(index);
                          moveMascotToIndex(index);
                          handleChoice(choice);
                          setTimeout(() => setMascotAnim('bob'), 420);
                        }}
                      >
                        <span className="segment-number monospace">{index + 1}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="mascot-holder" style={{ transform: `translate(${mascotXY.x}px, ${mascotXY.y}px)` }}>
                  <div className={`mascot ${mascotAnim}`}></div>
                </div>
              </div>
            ) : (
              <div className="d-grid gap-3">
                {choicesList.map((choice, idx) => {
                  const lbl = choice.label ?? 'Continue ▶';
                  return (
                    <Button
                      key={`choice-${idx}`}
                      variant="info"
                      className="choice-button retro-choice-button"
                      onClick={() => handleChoice(choice)}
                    >
                      <span className="choice-label">{lbl}</span>
                    </Button>
                  );
                })}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    )
}