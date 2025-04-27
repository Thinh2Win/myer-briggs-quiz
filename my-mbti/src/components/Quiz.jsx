import { Container, Row, Col, Button, Card, ProgressBar } from 'react-bootstrap';
import {scenarios} from '../assets/scenarios';

export default function Quiz() {
    const node = scenarios['start']

    return (
    <Container 
    fluid
    className="vw-100 vh-100 d-flex justify-content-center align-items-center"
    style={{
      backgroundImage: `url(${node.bg})`,
      backgroundSize:   'contain',      // ← fit the whole image inside
      backgroundPosition: 'center',     // ← keep it centered
      backgroundRepeat:  'no-repeat',   // ← don’t tile
    }}
    >
      {/* <Row className="justify-content-center mb-4">
        <Col xs={12} md={8} lg={6}>
          <ProgressBar now={percent} label={`${percent}%`} />
        </Col>
      </Row> */}

      <Row className="justify-content-center mt-auto mb-4">
        <Col xs={12} md={10} lg={8}>
          <Card className="text-center">
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Text className="fs-5 mb-4">{node.text}</Card.Text>

              {node.choices.map(c => (
                <Button
                  key={c.label}
                  variant="primary"
                  className="mb-3 w-100"                  
                >
                  {c.label}
                </Button>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    )
}