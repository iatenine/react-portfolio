import React from "react";
import { Project } from "./Project";
import { Projects } from "../data/projects";

export const Gallery = () => {
  const title = `Projects`;

  return (
    <>
      <h2>{title}</h2>

      {/* Populate gallery with projects */}
      {Projects.map((project, index) => (
        <Project key={project.title} props={{ ...project, index }} />
      ))}
    </>
  );
};
