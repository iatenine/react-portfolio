import React from "react";
import { Project } from "./Project";
import { Projects } from "../data/projects";

export const Gallery = () => {
  const title = `Projects`;

  return (
    <section className="hoverable" id="projects">
      <h2>{title}</h2>

      {/* Populate gallery with projects */}
      <div className="gallery main-gallery">
        {Projects.map((project) => (
          <Project key={project.title} props={project} />
        ))}
      </div>
    </section>
  );
};
