import React from "react";
import { allSkills } from "../data/technologies";

export const Resume = () => {
  return (
    <section id="resume" className="hoverable">
      <div className="d-flex flex-wrap">
        {allSkills.map((skill) => {
          return (
            <div className="flex-column mx-1">
              <h3>
                <i className={skill.icon}></i>
                {skill.label}
              </h3>
              <ul>
                {skill.content.map((skill) => {
                  return <li className="mx-3 resume-list-item">{skill}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      {/* Download button at bottom */}

      <div className="text-center my-5 mx-5">
        <a
          href="https://drive.google.com/file/d/1iY9m_c-F44DqWe5qguoQBK_KW5V3hLE2/edit"
          target="no_blank"
        >
          <button className="my-2 p-2 btn btn-success">
            <i class="fa fa-arrow-circle-down mx-1" aria-hidden="true"></i>
            View and Download Full Version
          </button>
        </a>
      </div>
    </section>
  );
};
