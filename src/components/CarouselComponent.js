import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = ({ url }) => {
  return (
    <Carousel variant="dark">
      {url.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={`${item.src}`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
