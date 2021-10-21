import React from "react";
import placeholderImage from "../img/placeholder.png";

export const Project = ({ props }) => {
  const { title, altText, subtitle, image, deploymentLink, sourceLink } = props;

  return (
    <div>
      <div className="project-container">
        <img
          src={image}
          alt={altText}
          placeholder={placeholderImage}
          className="project-image"
        >
          {/* {(src) => <img src={src} alt={altText} className="project-image" />} */}
        </img>
        <div className="project-caption">
          <div className="caption-header">
            <h3>{title}</h3>
            <h4 className="subtitle-label">{subtitle}</h4>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <a
                  href={deploymentLink}
                  className="caption-link"
                  target="no_blank"
                >
                  <span className="contact-label">Deploy</span>
                  <i
                    className="fa fa-external-link fa-2x"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
              <div className="col-6">
                <a href={sourceLink} className="caption-link" target="no_blank">
                  <span className="contact-label">Source</span>
                  <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
