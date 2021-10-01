import React from "react";
import profileImage from "../img/professionalish-profile.png";
import GitHubCalendar from "react-github-calendar";

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

  return (
    <>
      <section id="about" className="hoverable">
        <h2>Hello, I'm Jack</h2>
        <summary className="about-me-summary">
          <img
            id="my-image"
            load="lazy"
            src={profileImage}
            alt="Failed to load, just imagine something pretty great here"
          />
          <p>{blurb}</p>
        </summary>
      </section>

      <section className="">
        <div className="p-5 mx-5">
          <h2>
            <i className="fa fa-github p-1" />
            GitHub Activity
          </h2>
          <GitHubCalendar username="iatenine"></GitHubCalendar>
        </div>
      </section>
    </>
  );
};
