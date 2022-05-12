import React from "react";
// import profileImage from "../img/professionalish-profile.png";
import { GitHubActivity } from "./GitHubActivity";
import { IconList } from "./IconList";
import { Testimonials } from "./Testimonials";

export const About = () => {
  const blurb = `A Full Stack Web Developer comfortable migrating through many tech
          stacks, languages and frameworks, along with a long history of
          studying many disciplines of computer science. I have worked with
          production apps using NodeJs, Angular, Nest, Next, React, Typescript,
          Javascript, MySql, MongoDB and have used Python, Java and Django in
          non-production environments. A 10-year resident and now naturalized
          citizen of Linux-uania, Git version control, branch
          protection rules and GitHub/GitLab tools are very much second nature,
          evidenced by a GitHub history which includes contributions to various
          open source projects such as Godot Engine, GEdit and the Inquirer
          library`;

  const categories = [
    "Database",
    "Environment",
    "Language",
    "Library",
    "Operating System",
    "Stack",
    "Tool",
  ];

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
