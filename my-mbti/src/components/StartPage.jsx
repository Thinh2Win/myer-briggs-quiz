import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap'
import './Results.css';

export default function StartPage({setCurrentPage}) {

    return (
        <Container
        fluid
        className="jrpg-screen d-flex flex-column vh-100 justify-content-center scanline"
      >
        {/* Title Panel */}
        <Row className="jrpg-row m-auto justify-content-center">
          <Col xs={12}>
            <Card className="jrpg-panel">
              <Card.Body className="jrpg-panel-body text-center">
                <Card.Title className="monospace mb-1" style={{color: 'var(--color-accent)'}}>Reincarnated As A Jobless Kitty Cat In Another World?</Card.Title>                
                <Card.Text className="mb-0" style={{fontFamily: 'var(--font-ui)'}}>A Myers-Briggs Adventure</Card.Text>                
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="m-auto justify-content-center">
          <Col xs={12}>
            <Image src="/start_page.png" fluid style={{width: 'auto', maxHeight: '50vh'}}/>
          </Col>
        </Row>
  
        {/* Start Button Panel */}
        <Row className="jrpg-row justify-content-center m-auto">
          <Col xs={12} className="text-center">
            <Card className="jrpg-panel shadow-sm">
              <Card.Body className="jrpg-panel-body d-flex flex-column justify-content-center">
              <Card.Text className="mb-3" style={{fontFamily: 'var(--font-ui)'}}>Discover your true personality archetype!</Card.Text>
                <Button
                  variant="primary"
                  className="monospace start-button border-0"
                  onClick={() => (setCurrentPage('quiz'))}
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
