import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import './Results.css';

export default function StartPage({setCurrentPage}) {

    return (
        <Container
        fluid
        className="jrpg-screen d-flex flex-column vh-100 p-3 justify-content-center vw-100 p-0"
        style={{
            backgroundImage: `url('/firstDichotomy/start_page.png')`,
            backgroundSize:   'contain',
            backgroundPosition: 'center',
            backgroundRepeat:  'no-repeat',
            overflow: 'hidden',
          }}
      >
        {/* Title Panel */}
        <Row className="jrpg-row mb-3 w-100 justify-content-center mt-4">
          <Col xs={10} md={8} lg={6}>
            <Card className="jrpg-panel title-panel">
              <Card.Body className="jrpg-panel-body text-center">
                <Card.Title className="monospace mb-0 text-white">Reincarnated As A Jobless Kitty Cat In Another World?</Card.Title>                
                <Card.Title className="monospace mb-0 text-white">A Myers-Briggs Adventure</Card.Title>                
              </Card.Body>
            </Card>
          </Col>
        </Row>
  
        {/* Start Button Panel */}
        <Row className="jrpg-row w-100 justify-content-center mt-auto mb-4">
          <Col xs={8} md={6} lg={4} className="text-center">
            <Card className="jrpg-panel border-0 shadow-sm start-panel">
              <Card.Body className="jrpg-panel-body d-flex flex-column justify-content-center">
              <Card.Text className="monospace mt-1 small text-white">Discover your true personality archetype!</Card.Text>
                <Button
                  variant="primary"
                  className="monospace start-button"
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
