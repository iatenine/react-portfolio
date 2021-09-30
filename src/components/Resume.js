import React from "react";
import { allSkills } from "../data/technologies";

export const Resume = () => {
  return (
    <section id="resume" className="hoverable">
      <h2>Jack Linhart</h2>
      <summary>
        <ul>
          {allSkills.map((skill) => {
            return (
              <>
                <h3>{skill.label}</h3>
                {skill.content.map((skill) => {
                  return <li className="mx-3 resume-list-item">{skill}</li>;
                })}
              </>
            );
          })}
        </ul>
      </summary>
    </section>
  );
};
