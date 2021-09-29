import React from "react";

export const Contact = () => {
  return (
    <section class="hoverable" id="contact">
      <div class="container-fluid">
        {/* <!-- Include Github, LinkedIn, Email, phone number and resume --> */}
        <h2>Contact</h2>
        <div class="d-flex">
          <div class="flex-grow-1">
            <h3>
              <a
                href="https://github.com/iatenine"
                class="contact-link"
                rel="noopener noreferrer"
                target="no_blank"
              >
                <i class="fa fa-github-square" aria-hidden="true"></i>
                <span class="contact-label">GitHub</span>
              </a>
            </h3>
          </div>
          <div class="flex-grow-1">
            <h3>
              <a
                href="https://linkedin.com/in/jack-linhart"
                class="contact-link"
                rel="noopener noreferrer"
                target="no_blank"
              >
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                <span class="contact-label">LinkedIn</span>
              </a>
            </h3>
          </div>
          <div class="flex-grow-1">
            <h3>
              <a
                href="mailto:FullJackDevelopment@gmail.com"
                class="contact-link"
                rel="noopener noreferrer"
                target="no_blank"
              >
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span class="contact-label">Email</span>
              </a>
            </h3>
          </div>
          <div class="flex-grow-1">
            <h3>
              <a
                href="https://drive.google.com/file/d/1iY9m_c-F44DqWe5qguoQBK_KW5V3hLE2/view"
                class="contact-link"
                rel="noopener noreferrer"
                target="no_blank"
              >
                <i class="fa fa-briefcase" aria-hidden="true"></i>
                <span class="contact-label">Resume</span>
              </a>
            </h3>
          </div>
          <div class="flex-shrink-1">
            <h3>
              <a href="#contact" class="contact-link" id="phone-contact">
                <i class="fa fa-phone-square" aria-hidden="true"></i>
                <span class="contact-label">Phone</span>
              </a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
