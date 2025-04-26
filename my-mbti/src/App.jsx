// import { useState } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'

export default function App() {
  return (
    <Container className="py-5">
      {/* background image via CSS on body or a wrapper div */}
      <Row className="justify-content-center mb-4">
        <Col xs={12} md={8}>
          <h1 className="text-center">Welcome to the MBTI Quiz</h1>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs="auto">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text>
                Ready to find out your personality type?
              </Card.Text>
              <Button>
                Start Quiz
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}