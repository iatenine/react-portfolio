import React from "react";
// import profileImage from "../img/professionalish-profile.png";
import { GitHubActivity } from "./GitHubActivity";
import { IconList } from "./IconList";
import { Testimonials } from "./Testimonials";

const categories = [
  "Database",
  "Environment",
  "Language",
  "Library",
  "Operating System",
  "Stack",
  "Tool",
];

export const About = () => {
  return (
    <section id="about" className="hoverable">
      <h2>Why FJD?</h2>
      <summary className="about-me-summary">
        <h3>Experience</h3>
        <Testimonials />

        <h2>Consistency</h2>
        <GitHubActivity />
        <h2>Adaptability</h2>
        <div>
          {categories.map((category) =>
            category !== "Library" ? (
              <IconList key={category} category={category} />
            ) : (
              <IconList
                key={category}
                label={"Libraries"}
                category={category}
              />
            )
          )}
        </div>
      </summary>
    </section>
  );
};
