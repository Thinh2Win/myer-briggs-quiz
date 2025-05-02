import { useState } from 'react';
import { Container, Row, Col, Button, Card, ProgressBar } from 'react-bootstrap';
import {scenarios} from '../assets/scenarios';

export default function Quiz() {
    const [node, setNode] = useState(scenarios['start']);

    const handleChoice = (choice) => {
      setNode(scenarios[choice.next]);
    }

    return (
      <Container
        fluid
        className="d-flex flex-column vw-100 vh-100 p-0"
        style={{
          backgroundColor: 'black',
          backgroundImage: `url(${node.bg})`,
          backgroundSize:   'contain',
          backgroundPosition: 'center',
          backgroundRepeat:  'no-repeat',
        }}
      >
        {/* TOP ROW: your question text */}
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={10} lg={8}>
            <Card className="bg-dark bg-opacity-25 border-0 text-white">
              <Card.Body className="text-center">
                <Card.Text className="fs-7">
                  {node.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      
        {/* PUSH the next row down */}
        <Row className="mt-auto mb-4 justify-content-center">
          <Col xs={12} md={10} lg={8} className="d-grid gap-3">
            {node.choices.map(c => (
              <Button
                key={c.label}
                variant="primary"
                size="sm"
                className="bg-dark bg-opacity-75 border-0 text-white"
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