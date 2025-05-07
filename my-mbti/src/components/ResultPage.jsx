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
        <Container fluid className="d-flex flex-column vh-100 jrpg-screen">
          <Row>
            {/* Sprite Card */}
            <Col xs={8} md={8} className="m-0 p-0">
              <Card className="jrpg-panel">
                <Card.Body className="d-flex justify-content-center align-items-center">
                  <Image
                    src={spriteUrl}
                    fluid
                    alt={`Result sprite for ${mybp}`}                  
                  />
                </Card.Body>
              </Card>
            </Col>
            {/* Facts Column */}
            <Col xs={4} md={4} className="d-flex flex-column p-0">
              <Card className="flex-fill mb-1 shadow-sm jrpg-panel">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <Card.Title className="text-center mb-1 fact-title">{title}</Card.Title>
                  <Card.Text className="text-center mb-0 text-white">{mybp}</Card.Text>
                </Card.Body>
              </Card>
              <Card className="flex-fill mb-1 shadow-sm jrpg-panel">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <Card.Title className="mb-0 fact-title">Race</Card.Title>
                  <Card.Text className="mb-2 text-center text-white">{race}</Card.Text>
                  <Card.Title className="mb-0 fact-title">Job Class</Card.Title>
                  <Card.Text className="mb-0 text-center text-white">{job}</Card.Text>
                </Card.Body>
              </Card>
              <Card className="flex-fill shadow-sm jrpg-panel">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <Card.Title className="mb-1 fact-title">Stats</Card.Title>
                  {stats.map(stat => <Card.Text key={stat} className="mb-0 text-white">{stat}</Card.Text>)}                  
                </Card.Body>
              </Card>
            </Col>
          </Row>
        {/* Character description section*/}
        <Row >
          <Col xs={12} className="p-0">
            <Card className="jrpg-panel">
              <Card.Body className="d-flex flex-column">
                <Card.Text className="text-center text-white">
                  {desc}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
  
        {/* Compatibility section (~40%) */}
        <Row>
          {/* Most Compatible */}
          <Col xs={6} md={6} className="p-0">
            <Card className="jrpg-panel">
              <Card.Header className="text-center text-white" style={{ backgroundColor: '#4e79a7' }}>Purrrrfect Partners</Card.Header>
              <Card.Body className="d-flex flex-row flex-wrap justify-content-center align-items-center">
                {compatible.map(person => {
                  const purrPerson = personalities[person];               
                  return <div onClick={() => setType(personalities[person])} key={purrPerson.mybp} className="d-flex flex-column align-items-center p-1">
                    <Image
                      src={purrPerson.spriteUrl}
                      fluid
                      style={{ maxHeight: '10vh' }}
                      alt={purrPerson.mybp}
                    />
                    <div className="mt-1 text-center fw-semibold text-white">{purrPerson.title}</div>
                  </div>
                })}
              </Card.Body>
            </Card>
          </Col>
          {/* Least Compatible */}
          <Col xs={6} md={6} className="p-0">
            <Card className="jrpg-panel">
              <Card.Header className="text-center text-white" style={{ backgroundColor: '#f28e2c' }}>Clawful Adversaries</Card.Header>
              <Card.Body className="d-flex flex-row flex-wrap justify-content-center align-items-center">
                {incompatible.map(person => {
                  const clawPerson = personalities[person]; 
                  return <div onClick={() => setType(personalities[person])} key={clawPerson.mybp} className="d-flex flex-column align-items-center p-1">
                    <Image
                      src={clawPerson.spriteUrl}                      
                      fluid
                      style={{ maxHeight: '10vh'}}
                      alt={clawPerson.mybp}
                    />
                    <div className="mt-1 text-center fw-semibold text-white">{clawPerson.title}</div>
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