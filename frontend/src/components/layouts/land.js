import React from 'react';
import { Carousel } from 'react-bootstrap';
 // Import the CSS for additional styles

function Landing() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Welcome to Our Landing Page</h1> */}
      </header>

      {/* Carousel with 100% width */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1920x600"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide Title</h3>
            <p>Description for the first slide.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1920x600"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide Title</h3>
            <p>Description for the second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1920x600"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third Slide Title</h3>
            <p>Description for the third slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Landing;
