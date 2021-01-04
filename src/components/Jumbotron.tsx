import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import sunset from '../sunset.jpg';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbo {
    background: url(${sunset}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>RaDrIgIs blog</h1>
        <p>
          Deserunt velit elit mollit in dolor duis non in labore ad nulla eu consectetur. Veniam
          magna exercitation laborum quis nostrud ipsum anim qui reprehenderit. Elit laborum irure
          adipisicing proident id elit adipisicing consequat pariatur laboris ullamco fugiat nostrud
          tempor. Deserunt Lorem reprehenderit aliqua nulla anim. Aliquip do officia velit pariatur
          id velit culpa magna laboris non laboris do ea labore. Nostrud occaecat cillum elit aliqua
          labore quis id eu occaecat deserunt non dolore magna. Qui et nulla et in nulla aute Lorem
          Lorem amet exercitation elit est mollit eiusmod.
        </p>
      </Container>
    </Jumbo>
  </Styles>
);

export default Jumbotron;
