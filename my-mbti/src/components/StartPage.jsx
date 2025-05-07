import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap'
import './Results.css';

export default function StartPage({setCurrentPage}) {

    return (
        <Container
        fluid
        className="jrpg-screen d-flex flex-column vh-100 justify-content-center"
      >
        {/* Title Panel */}
        <Row className="jrpg-row m-auto justify-content-center">
          <Col xs={12}>
            <Card className="jrpg-panel">
              <Card.Body className="jrpg-panel-body text-center">
                <Card.Title className="monospace mb-0 text-white">Reincarnated As A Jobless Kitty Cat In Another World?</Card.Title>                
                <Card.Text className="monospace mb-0 text-white">A Myers-Briggs Adventure</Card.Text>                
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="m-auto justify-content-center">
          <Col xs={12}>
            <Image src="/firstDichotomy/start_page.png" fluid style={{width: 'auto', maxHeight: '50vh'}}/>
          </Col>
        </Row>
  
        {/* Start Button Panel */}
        <Row className="jrpg-row justify-content-center m-auto">
          <Col xs={12} className="text-center">
            <Card className="jrpg-panel shadow-sm">
              <Card.Body className="jrpg-panel-body d-flex flex-column justify-content-center">
              <Card.Text className="monospace text-white">Discover your true personality archetype!</Card.Text>
                <Button
                  variant="primary"
                  className="monospace start-button border-0"
                  onClick={() => (setCurrentPage('quiz'))}
                  style={{ backgroundColor: '#f28e2c' }}
                >
                  Start Test ▶
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
}
