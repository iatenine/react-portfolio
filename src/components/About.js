import React from "react";

export const About = () => {
  return (
    <section id="about" class="hoverable">
      <h2>Hello, I'm Jack</h2>
      <summary class="about-me-summary">
        <img
          id="my-image"
          load="lazy"
          src="assets/img/professionalish-profile.png"
          alt="Me"
        />
        <p>
          A Full Stack Web Developer comfortable migrating through many tech
          stacks, languages and frameworks, along with a long history of
          studying many disciplines of computer science. I have worked with
          production apps using NodeJs, Angular, Nest, Next, React, Typescript,
          Javascript, MySql, MongoDB and have used Python, Java and Django in
          non-production environments. A 10-year resident and now naturalized
          citizen of <em>Linux</em>-uania, Git version control, branch
          protection rules and GitHub/GitLab tools are very much second nature,
          evidenced by a GitHub history which includes contributions to various
          open source projects such as Godot Engine, GEdit and the Inquirer
          library
        </p>
      </summary>
    </section>
  );
};
