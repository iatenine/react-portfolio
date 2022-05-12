import React from "react";
import { icons } from "../data/icons";
import { Carousel } from "react-bootstrap";

const testimonialArr = [
  {
    label: "First go",
    blurb: "This is wonderful!",
    image: icons[4].icon,
  },
  {
    label: "2nd Label",
    blurb: "Everything was fantastic!",
    image: icons[7].icon,
  },
  {
    label: "Final label",
    blurb: "Oh noes!",
    image: icons[6].icon,
  },
];

export const Testimonials = () => {
  return (
    <Carousel variant="dark">
      {testimonialArr.map((el) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={el.image}
            height="250px"
            alt="First slide"
          />
          <Carousel.Caption color="red">
            <h3>{el.label}</h3>
            <p>{el.blurb}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
