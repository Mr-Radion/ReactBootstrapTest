import React from 'react';
import { Carousel } from 'react-bootstrap';
import sunset from '../sunset.jpg';
import sunset2 from '../sunsets-and-sunrises-.jpg';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item style={{'height': '600px'}} >
        <img className="d-block w-100" src={sunset} alt="sunset" />
        <Carousel.Caption>
          <h3>RaDrIgIs blog</h3>
          <p>Elit et nulla consequat nulla elit mollit nisi qui.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{'height': '600px'}}>
        <img className="d-block w-100" src={sunset2} alt="sunset" />
        <Carousel.Caption>
          <h3>RaDrIgIs blog</h3>
          <p>Elit et nulla consequat nulla elit mollit nisi qui.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
