import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './Results.css';
import { personalities } from '../assets/personalities';

const dummy = {
    mybp: '',
    title: '',
    spriteUrl: null,
    compatible: [],
    incompatible: [],
    race: '',
    job: '',
    desc: '',
    stats: [],
}
export default function ResultPage({score}) {
    // const {type, spriteUrl, compatible, incompatible, hashtags} = ENTP
    const [type, setType] = useState(dummy);

    useEffect(() => {
      const type = findType(score);
      setType(type);
    }, [])

    const {mybp, title, spriteUrl, compatible, incompatible, race, job, desc, stats} = type;
    return (
        <Container fluid className="d-flex flex-column vh-100 overflow-hidden gap-2 jrpg-screen">
        {/* Top section (~40%) */}
        <Row style={{ flex: '0 0 40%'}}>
          {/* Sprite Card */}
          <Col xs={6} md={8} className="px-1 h-100">
            <Card className="h-100 shadow-sm jrpg-panel" style={{maxWidth: '500px', maxHeight: '400px'}}>
              <Card.Body className="d-flex justify-content-center align-items-center p-0">
                <Image
                  src={spriteUrl}
                  fluid
                  style={{ maxHeight: '400px', objectFit: 'contain'}}
                  alt={`Result sprite for ${type}`}
                />
              </Card.Body>
            </Card>
          </Col>
          {/* Facts Column */}
          <Col xs={6} md={4} className="px-1 d-flex flex-column h-100" style={{maxWidth: '500px', maxHeight: '400px'}}>
              <Card className="flex-fill mb-1 shadow-sm jrpg-panel">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center p-1">
                  <Card.Title className="small text-center mb-1 fact-title">{title}</Card.Title>
                  <Card.Text className="small text-center mb-0 text-white">{mybp}</Card.Text>
                </Card.Body>
              </Card>
              <Card className="flex-fill mb-1 shadow-sm jrpg-panel">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center p-1">
                  <Card.Title className="small mb-0 fact-title">Race</Card.Title>
                  <Card.Text className="small mb-2 text-center text-white">{race}</Card.Text>
                  <Card.Title className="small mb-0 fact-title">Job Class</Card.Title>
                  <Card.Text className="small mb-0 text-center text-white">{job}</Card.Text>
                </Card.Body>
              </Card>
              <Card className="flex-fill shadow-sm jrpg-panel">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center p-1">
                  <Card.Title className="small mb-1 fact-title">Stats</Card.Title>
                  {stats.map(stat => <Card.Text key={stat} className="mb-0 text-white" style={{fontSize: '0.8em'}}>{stat}</Card.Text>)}                  
                </Card.Body>
              </Card>
          </Col>
        </Row>
        {/* Character description section*/}
        <Row
        // className="flex-grow-0"
        style={{ flex: '0 0 10%'}}
        >
        <Col xs={12} className="px-1">
          <Card className="shadow-sm jrpg-panel">
            <Card.Body className="d-flex flex-column">
              <Card.Text className="text-center text-white" style={{fontSize: '0.8em'}}>
                {desc}
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
              <Card.Header className="text-center small bg-success text-white py-1">Purrrrfect Partners</Card.Header>
              <Card.Body className="d-flex flex-row flex-wrap justify-content-center align-items-center">
                {compatible.map(person => {
                  const purrPerson = personalities[person];               
                  return <div onClick={() => setType(personalities[person])} key={purrPerson.mybp} className="d-flex flex-column align-items-center p-1">
                    <Image
                      src={purrPerson.spriteUrl}
                      fluid
                      style={{ maxHeight: '7vh', objectFit: 'contain' }}
                      alt={purrPerson.mybp}
                    />
                    <div className="mt-1 text-center small fw-semibold text-white">{purrPerson.title}</div>
                  </div>
                })}
              </Card.Body>
            </Card>
          </Col>
          {/* Least Compatible */}
          <Col xs={6} md={6} className="px-1 h-80">
            <Card className="h-80 shadow-sm jrpg-panel">
              <Card.Header className="text-center small bg-danger text-white py-1">Clawful Adversaries</Card.Header>
              <Card.Body className="d-flex flex-row flex-wrap justify-content-center align-items-center">
                {incompatible.map(person => {
                  const clawPerson = personalities[person]; 
                  return <div onClick={() => setType(personalities[person])} key={clawPerson.mybp} className="d-flex flex-column align-items-center p-1">
                    <Image
                      src={clawPerson.spriteUrl}                      
                      fluid
                      style={{ maxHeight: '7vh', objectFit: 'contain' }}
                      alt={clawPerson.mybp}
                    />
                    <div className="mt-1 text-center small fw-semibold text-white">{clawPerson.title}</div>
                  </div>
                })}
              </Card.Body>
            </Card>
          </Col>
        </Row>
  
        </Container>
    )
}

const typeMap = {
  0: ['I', 'E'],
  1: ['S', 'N'],
  2: ['T', 'F'],
  3: ['J', 'P'],
}

function findType (score) {
  // [2, 3, 4, 5] 
  /* 
    idx 0: Introvert - Extrovert 
    idx 1: Sensing - Intuition
    idx 2: Thinking - Feeling
    idx 3: Judging - Percieving 
    left <= 4 < right 
  */
 let type = score.map((num, idx) => {
  if (num <= 4) return typeMap[idx][0]
  else return typeMap[idx][1]
 }).join('');
 return personalities[type];
}