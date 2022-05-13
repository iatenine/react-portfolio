import React from "react";
import { Carousel } from "react-bootstrap";
import { Projects as projects } from "../data/projects";

export const Testimonials = () => {
  return (
    <Carousel>
      {projects.map((el) => (
        <Carousel.Item>
          <a href={el.deploymentLink} target="no_blank">
            <img
              className="d-block w-100"
              src={el.image}
              height="250px"
              alt={el.altText}
            />
            <Carousel.Caption color="red">
              <h3>{el.title}</h3>
              <p>{el.subtitle}</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
