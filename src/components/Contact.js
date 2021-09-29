import React from "react";
import { contactLinks } from "../data/contactLinks";

// 2 components in 1 file, Say whaaaaaaa

// Define a standard contact link (phone not withstanding) to create many links easily
const ContactLink = ({ props }) => {
  return (
    <div className="flex-grow-1">
      <h3>
        <a
          href={props.href}
          className="contact-link"
          rel="noopener noreferrer"
          target="no_blank"
        >
          <i className={props.icon} aria-hidden="true"></i>
          <span className="contact-label">{props.label}</span>
        </a>
      </h3>
    </div>
  );
};

// Build the ENTIRE Contact thing with the help of the ContactLink component
export const Contact = () => {
  return (
    <section className="hoverable" id="contact">
      <div className="container-fluid">
        {/* <!-- Include Github, LinkedIn, Email, phone number and resume --> */}
        <h2>Contact</h2>
        <div className="d-flex">
          {/* Map through links to quickly generate links */}
          {contactLinks.map((link, index) => {
            return <ContactLink key={index} props={link} />;
          })}
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
