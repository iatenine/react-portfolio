import React from "react";

export const Contact = () => {
  return (
    <section className="hoverable" id="contact">
      <div className="container-fluid">
        {/* <!-- Include Github, LinkedIn, Email, phone number and resume --> */}
        <h2>Contact</h2>
        <div className="d-flex">
          <div className="flex-grow-1">
            <h3>
              <a
                href="https://github.com/iatenine"
                className="contact-link"
                rel="noopener noreferrer"
                target="no_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true"></i>
                <span className="contact-label">GitHub</span>
              </a>
            </h3>
          </div>
          <div className="flex-grow-1">
            <h3>
              <a
                href="https://linkedin.com/in/jack-linhart"
                className="contact-link"
                rel="noopener noreferrer"
                target="no_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                <span className="contact-label">LinkedIn</span>
              </a>
            </h3>
          </div>
          <div className="flex-grow-1">
            <h3>
              <a
                href="mailto:FullJackDevelopment@gmail.com"
                className="contact-link"
                rel="noopener noreferrer"
                target="no_blank"
              >
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span className="contact-label">Email</span>
              </a>
            </h3>
          </div>
          <div className="flex-grow-1">
            <h3>
              <a
                href="https://drive.google.com/file/d/1iY9m_c-F44DqWe5qguoQBK_KW5V3hLE2/view"
                className="contact-link"
                rel="noopener noreferrer"
                target="no_blank"
              >
                <i className="fa fa-briefcase" aria-hidden="true"></i>
                <span className="contact-label">Resume</span>
              </a>
            </h3>
          </div>
          <div className="flex-shrink-1">
            <h3>
              <a href="#contact" className="contact-link" id="phone-contact">
                <i className="fa fa-phone-square" aria-hidden="true"></i>
                <span className="contact-label">Phone</span>
              </a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
