import React from 'react';
import { Slider } from './components';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import sunset from './sunset.jpg';

const cards = [1, 2, 3, 4];

function Home() {
  return (
    <>
      <Slider />
      <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Row>
          {cards &&
            cards.map((card) => (
              <Col key={card} style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={sunset}></Card.Img>
                  <Card.Body>
                    <Card.Title>RaDrIgIs blog</Card.Title>
                    <Card.Text>Amet id cillum reprehenderit ullamco.</Card.Text>
                    <Button variant="primary">Learn more</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
