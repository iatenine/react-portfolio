import React from "react";

export const Project = ({ props }) => {
  const proj = props;
  const { title, altText, subtitle, image, deploymentLink, sourceLink } = proj;

  return (
    <div>
      <div className="project-container">
        <img className="project-image" src={image} alt={altText} />
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
