import { useState } from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import { scenarios } from '../assets/scenarios';
import './Results.css';

export default function Quiz({setCurrentPage, setScore}) {
    const [node, setNode] = useState(scenarios['start']);

    const handleChoice = (choice) => {
      if (choice.id === 'end') return setCurrentPage('end');
      if (choice.score > 0) {
        setScore(prev => {
          const newScore = [...prev];
          newScore[node.dichotomy] += choice.score;
          return newScore;
        });
      }
      setNode(scenarios[choice.next]);
    }

    return (
      <Container
        fluid
        className="jrpg-screen d-flex flex-column vh-100 scanline"
      >
        {/* TOP ROW: your question text */}
        <Row className="justify-content-center m-auto">
          <Col xs={12}>
            <Card className="jrpg-panel">
              <Card.Body className="text-center">
                <Card.Text>
                  {node.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center m-auto">
          <Col xs={12}>
            <Image src={`${node.bg}`} fluid style={{width: 'auto', maxHeight: '50vh'}}/>
          </Col>
        </Row>
      
        {/* PUSH the next row down */}
        <Row className="m-auto justify-content-center">
          <Col xs={12} className="d-grid gap-3">
            {node.choices.map(c => (
              <Button
                key={c.label}
                variant="info"
                size="sm"
                className="choice-button"
                onClick={() => handleChoice(c)}
              >
                {c.label}
              </Button>
            ))}
          </Col>
        </Row>
      </Container>
    )
}