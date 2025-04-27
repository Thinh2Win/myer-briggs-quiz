import { Container, Row, Col, Button, Card } from 'react-bootstrap'

export default function StartContainer() {
    return (
        <Container   fluid
            className="vh-100 d-flex flex-column justify-content-center align-items-center">
            {/* background image via CSS on body or a wrapper div */}
            <Row className="justify-content-center mb-4">
                <Col xs={12} md={8}>
                <h1 className="text-center">Welcome to the MBTI Quiz</h1>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col xs="auto">
                <Card style={{ width: '18rem' }}>
                    <Card.Body className="text-center">
                    <Card.Text className="fs-4 fs-md-2 mb-4">
                        Ready to find out your personality type?
                    </Card.Text>
                    <Button size="lg">
                        Start Quiz
                    </Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}