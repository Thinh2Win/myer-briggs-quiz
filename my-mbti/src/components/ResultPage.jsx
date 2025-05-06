import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './Results.css';

const ENTP = {
    type: 'ENTP',
    title: 'The Commander',
    spriteUrl: '/sprites/ENTP.png',
    compatible: ['ENTP', 'ENTP', 'ENTP'],
    incompatible: ['ENTP', 'ENTP', 'ENTP'],
    hashtags: [],

}
export default function ResultPage({score}) {
    const {type, spriteUrl, compatible, incompatible, hashtags} = ENTP
    return (
        <Container fluid className="d-flex flex-column vh-100 overflow-hidden gap-2 jrpg-screen">
        {/* Top section (~40%) */}
        <Row style={{ flex: '0 0 40%'}}>
          {/* Sprite Card */}
          <Col xs={8} md={8} className="px-1 h-100">
            <Card className="h-100 shadow-sm jrpg-panel" style={{maxWidth: '500px'}}>
              <Card.Body className="d-flex justify-content-center align-items-center p-0">
                <Image
                  src={spriteUrl}
                  fluid
                  style={{ maxHeight: '100%', objectFit: 'contain'}}
                  alt={`Result sprite for ${type}`}
                />
              </Card.Body>
            </Card>
          </Col>
          {/* Facts Column */}
          <Col xs={4} md={4} className="px-1 d-flex flex-column justify-content-between h-100">
              <Card className="flex-fill mb-1 shadow-sm jrpg-panel">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center p-1">
                  <Card.Title className="small text-center mb-1 fact-title">{ENTP.title}</Card.Title>
                  <Card.Text className="small text-center mb-0 text-white">ENTP</Card.Text>
                </Card.Body>
              </Card>
              <Card className="flex-fill mb-1 shadow-sm jrpg-panel">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center p-1">
                  <Card.Title className="small mb-0 fact-title">Race</Card.Title>
                  <Card.Text className="small mb-2 text-center text-white">Cheshire Cat</Card.Text>
                  <Card.Title className="small mb-0 fact-title">Job Class</Card.Title>
                  <Card.Text className="small mb-0 text-center text-white">Sorcerer of Chaos</Card.Text>
                </Card.Body>
              </Card>
              <Card className="flex-fill shadow-sm jrpg-panel">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center p-1">
                  <Card.Title className="small text-center mb-1 fact-title">Signature Item</Card.Title>
                  <Card.Text className="small text-center mb-0 text-white">Magic Mirror</Card.Text>
                </Card.Body>
              </Card>
          </Col>
        </Row>
        {/* Character description section*/}
        <Row
        className="flex-grow-0"
        style={{ flex: '0 0 10%'}}
        >
        <Col xs={12} className="px-1">
          <Card className="h-100 shadow-sm jrpg-panel">
            <Card.Body className="d-flex flex-column p-2">
              <Card.Text className="text-center small text-white">
                {'The Cheshire cat archetype: clever, mischievous, and one step ahead in the game of curiosity'}
              </Card.Text>
              <Card.Text className="text-center small text-white">
                {'Sorcerer of Chaos: wielding unpredictable magic and creative tricks that keep everyone guessing'}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
  
        {/* Compatibility section (~40%) */}
        <Row style={{ flex: '0 0 40%' }}>
          {/* Most Compatible */}
          <Col xs={6} md={6} className="px-1 h-80">
            <Card className="h-80 shadow-sm jrpg-panel">
              <Card.Header className="text-center small bg-success text-white py-1">Purrrfect Partners</Card.Header>
              <Card.Body className="d-flex flex-row flex-wrap justify-content-center align-items-center">
                {compatible.map(item => (
                  <div key={item.type} className="d-flex flex-column align-items-center p-1">
                    <Image
                      src={ENTP.spriteUrl}
                      fluid
                      style={{ maxHeight: '7vh', objectFit: 'contain' }}
                      alt={item.type}
                    />
                    <div className="mt-1 text-center small fw-semibold text-white">{ENTP.title}</div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
          {/* Least Compatible */}
          <Col xs={6} md={6} className="px-1 h-80">
            <Card className="h-80 shadow-sm jrpg-panel">
              <Card.Header className="text-center small bg-danger text-white py-1">Clawful Adversaries</Card.Header>
              <Card.Body className="d-flex flex-row flex-wrap justify-content-center align-items-center">
                {incompatible.map(item => (
                  <div key={item.type} className="d-flex flex-column align-items-center p-1">
                    <Image
                      src={ENTP.spriteUrl}                      
                      fluid
                      style={{ maxHeight: '7vh', objectFit: 'contain' }}
                      alt={item.type}
                    />
                    <div className="mt-1 text-center small fw-semibold text-white">{ENTP.title}</div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
  
        </Container>
    )
}
