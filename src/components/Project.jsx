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
    count,
  } = props;

  return (
    <>
      <div>
        <div className="caption-header">
          <h3>{title}</h3>
          <h4 className="subtitle-label">{subtitle}</h4>
        </div>

        <div className="summary-container">
          <figure>
            <img
              src={image}
              alt={altText}
              placeholder={placeholderImage}
              className="project-image"
              style={{
                float: index % 2 !== 0 ? "right" : "left",
              }}
            ></img>
          </figure>

          <p style={{}}>
            {description ?? ""}
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, nostrum fuga! A ipsa consectetur officia eveniet
            reprehenderit, architecto nobis suscipit eos facere perspiciatis,
            unde itaque cumque dolore! Enim repellendus recusandae animi illo
            aut deserunt ex, nisi voluptates sequi at temporibus maiores
            explicabo beatae laudantium tempora excepturi atque iusto, dolor
            placeat? */}
          </p>
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
                <span className="contact-label">Source</span>
              </a>
            </div>
          </div>
        </div>
        {count !== index + 1 ? <hr className="mx-2" /> : <></>}
      </div>
    </>
  );
};
