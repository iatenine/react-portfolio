import React from "react";
import { Project } from "./Project";

export const Gallery = () => {
  const title = `Projects`;
  const project = {
    image: "",
  altText: "",
  title: "",
  subtitle: "",
  deploymentLink: "",
  sourceLink: "",
  }

  return (
    <section className="hoverable" id="projects">
      <h2>{title}</h2>

      {/* <!-- Gallery --> */}
      <div className="gallery header">
        <Project props={Project} />
        {/* <!-- Gallery Showcase Project --> */}
      </div>

      <div className="gallery main-gallery">
        {/* <!-- Gallery Main Section --> */}
        <Project props={Project} />
        <Project props={Project} />
        <Project props={Project} />
        <Project props={Project} />
        <Project props={Project} />
      </div>
    </section>
  );
};
