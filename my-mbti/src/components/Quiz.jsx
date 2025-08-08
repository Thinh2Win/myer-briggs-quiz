import { useMemo, useState, useCallback } from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import { scenarios } from '../assets/scenarios';
import './Results.css';

export default function Quiz({setCurrentPage, setScore}) {
    const [node, setNode] = useState(scenarios['start']);
    const [stepCount, setStepCount] = useState(1);

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

    // Helpers for Likert ordering and compact labels
    const parseRank = (label) => {
      const match = /^\s*(\d+)/.exec(label || '');
      return match ? parseInt(match[1], 10) : null;
    };
    const getShortLabel = (label) => {
      const rank = parseRank(label);
      return rank ? String(rank) : label;
    };
    const isLikert = useMemo(() => {
      const ranks = (node?.choices || []).map(c => parseRank(c.label)).filter(v => typeof v === 'number');
      return (node?.choices?.length ?? 0) >= 3 && ranks.length >= Math.max(3, Math.floor((node?.choices?.length ?? 0) * 0.6));
    }, [node]);
    const orderedChoices = useMemo(() => {
      if (!isLikert) return node.choices;
      const withRanks = node.choices.map(c => ({ c, r: parseRank(c.label) }));
      // Sort by rank ascending (least → most); non-numeric sink to end in original order
      const numeric = withRanks.filter(x => typeof x.r === 'number').sort((a,b) => (a.r||0) - (b.r||0));
      const nonNumeric = withRanks.filter(x => x.r == null);
      return [...numeric.map(x => x.c), ...nonNumeric.map(x => x.c)];
    }, [node, isLikert]);
    // No keyboard navigation: mobile-first interactions

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
            <div className="pixel-frame">
              <Image src={`/${node.bg}`} alt="Scene" fluid style={{width: 'auto', maxHeight: '50vh'}}/>
            </div>
          </Col>
        </Row>
      
        {/* PUSH the next row down */}
        <Row className="m-auto justify-content-center sticky-choices">
          <Col xs={12}>
            {isLikert ? (
              <div className="likert-wrapper">
                <div className="likert-legend monospace">Least likely ⟶ Most likely</div>
                <div className="likert-bar">
                  {orderedChoices.map((choice) => {
                    const rank = parseRank(choice.label);
                    const rankClass = typeof rank === 'number' ? `rank-${rank}` : 'rank-x';
                    return (
                      <button
                        key={choice.label}
                        type="button"
                        className={`likert-segment ${rankClass}`}
                        aria-label={choice.label}
                        onClick={() => handleChoice(choice)}
                      >
                        <span className="segment-number monospace">{getShortLabel(choice.label)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="d-grid gap-3">
                {orderedChoices.map((choice) => (
                  <Button
                    key={choice.label}
                    variant="info"
                    className="choice-button retro-choice-button"
                    onClick={() => handleChoice(choice)}
                  >
                    <span className="choice-label">{choice.label}</span>
                  </Button>
                ))}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    )
}