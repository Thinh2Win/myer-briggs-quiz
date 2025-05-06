import { Container, Row, Col, Button, Card } from 'react-bootstrap'

export default function StartPage({setCurrentPage}) {
    return (
        <Container   
            fluid
            style={{ overflow: 'hidden' }}
            className="vh-100 d-flex flex-column justify-content-center align-items-center">
            {/* background image via CSS on body or a wrapper div */}
            <Row className="justify-content-center d-flex flex-row mb-4">
                <Col xs={12} md={8}>
                <h1 className="text-center">Reincarnated As A Jobless Kitty Cat In Another World?</h1>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col xs="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                        <Card.Text className="fs-4 fs-md-2 mb-4">
                            Unlock your archetype personality in 5 minutes and discover your unique strengths!
                        </Card.Text>
                        <Button size="lg" onClick={() => setCurrentPage('quiz')}>
                            Discover Your Kitty Self
                        </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}