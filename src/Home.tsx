import React from 'react';
import { Slider, Jumbotron } from './components';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import sunset from './sunset.jpg';

const cards = [1, 2, 3, 4, 5, 6];

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
      <Jumbotron />
      <Container style={{ marginBottom: '30px' }}>
        <Row>
          <Col md={7}>
            <img src={sunset} alt="sunset" height={400} />
          </Col>
          <Col md={5}>
            <h2>RaDrIgIs blog</h2>
            <p>
              Sit sunt quis quis excepteur ex sint est est ex sit ullamco aliqua elit Lorem. Dolore
              Lorem velit velit excepteur sit eu occaecat est. Officia et elit sint fugiat
              consequat. Amet officia Lorem adipisicing ad deserunt qui exercitation eiusmod dolor
              exercitation officia et. Tempor duis proident est laborum consequat non dolor esse
              sint ea amet.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
