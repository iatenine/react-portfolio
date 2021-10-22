import React from "react";
import placeholderImage from "../img/placeholder.png";

export const Project = ({ props }) => {
  const {
    title,
    altText,
    subtitle,
    image,
    deploymentLink,
    sourceLink,
    index,
    description,
    technologies,
  } = props;

  return (
    <section className="hoverable">
      <div>
        {/* Title and sub-title */}
        <div>
          <h3>{title}</h3>
          <h4 className="subtitle-label">
            <em>{subtitle}</em>
          </h4>
        </div>

        <div className="summary-container">
          {/* Project Preview Image */}
          <img
            src={image}
            alt={altText}
            placeholder={placeholderImage}
            className="project-image p-1"
            style={{
              float: index % 2 !== 0 ? "right" : "left",
            }}
          ></img>

          {/* Project Description */}
          <p>{description ?? ""}</p>

          {/* Tech Stack Summary */}
          {technologies.length ? (
            <div>
              <h5>Technologies</h5>
              <ul>
                {technologies.map((tech, index) => (
                  <li
                    key={tech}
                    style={{
                      display: "inline",
                    }}
                  >
                    {tech}
                    {index !== technologies.length - 1 && ", "}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            () => null
          )}
        </div>

        {/* Footer links */}
        <div className="container">
          <div className="row">
            <div
              className="col-6"
              style={{
                display: "flex",
                justifyContent: "left",
              }}
            >
              <a
                href={deploymentLink}
                className="caption-link"
                target="no_blank"
              >
                <i
                  className="fa fa-external-link fa-2x mx-1"
                  aria-hidden="true"
                ></i>
                <span className="contact-label">Deploy</span>
              </a>
            </div>
            <div
              className="col-6"
              style={{
                display: "flex",
                justifyContent: "right",
              }}
            >
              <a href={sourceLink} className="caption-link" target="no_blank">
                <i className="fa fa-github fa-2x mx-1" aria-hidden="true"></i>
                <span className="contact-label">
                  {sourceLink === "https://github.com/iatenine"
                    ? "View profile (closed source)"
                    : "Source"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
