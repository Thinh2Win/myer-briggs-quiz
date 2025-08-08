import { useCallback } from 'react'
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap'
import './Results.css';

export default function StartPage({setCurrentPage}) {
    const startQuiz = useCallback(() => setCurrentPage('quiz'), [setCurrentPage]);

    return (
        <Container
        fluid
        className="jrpg-screen d-flex flex-column vh-100 justify-content-center scanline retro-start"
      >
        {/* Title Panel */}
        <Row className="jrpg-row m-auto justify-content-center">
          <Col xs={12}>
            <Card className="jrpg-panel title-plate">
              <Card.Body className="jrpg-panel-body text-center">
                <Card.Title className="monospace mb-1" style={{color: 'var(--color-accent)'}}>Reincarnated As A Jobless Kitty Cat In Another World?</Card.Title>
                <Card.Text className="mb-0" style={{fontFamily: 'var(--font-ui)'}}>A Myers-Briggs Adventure</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="m-auto justify-content-center">
          <Col xs={12}>
            <div className="pixel-frame">
              <Image src="/start_page.png" alt="Start scene" fluid style={{width: 'auto', maxHeight: '50vh'}}/>
            </div>
          </Col>
        </Row>
  
        {/* Start Button Panel */}
        <Row className="jrpg-row justify-content-center m-auto">
          <Col xs={12} className="text-center">
            <Card className="jrpg-panel shadow-sm">
              <Card.Body className="jrpg-panel-body d-flex flex-column justify-content-center align-items-center">
                <Card.Text className="mb-3" style={{fontFamily: 'var(--font-ui)'}}>Discover your true personality archetype!</Card.Text>
                <Button
                  variant="primary"
                  className="monospace start-button retro-start-button border-0"
                  onClick={startQuiz}
                >
                  Start ▶
                </Button>
                <div className="press-start mt-2">Press Start to Continue</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="retro-footer">© 199X KittySoft</div>
      </Container>
    )
}
