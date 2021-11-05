import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef();
  const [error, setError] = useState(" ");

  const errorListStyle = {
    color: "red",
    listStyleType: "circle",
  };

  const checkEmpty = (e) => {
    const { name, value } = e.target;
    setError(!value ? `${name} is required` : "");
  };

  const validateEmail = (email) => {
    if (!email) return setError("Email is required");
    const re =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pass = re.test(String(email).toLowerCase());
    setError(!pass ? "Please enter a valid email" : "");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_98es1g8",
        "template_zmq1o4j",
        form.current,
        "user_b1sE1QHEdnbuzTIQ6wIH0"
      )
      .then(
        () => {
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setError("Something went wrong: ", error.text);
        }
      );
  };

  return (
    <section className="contact-form hoverable">
      <div className="container">
        <h2 className="text-center">Contact</h2>
        <form id="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="row mb-3">
            {/* Name */}
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control mb-2"
                id="name"
                name="name"
                placeholder="Jonathon Dough"
                onBlur={(e) => checkEmpty(e)}
                onChange={
                  error === "name is required" ? (e) => checkEmpty(e) : null
                }
              />
            </div>

            {/* Email */}
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control mb-2"
                id="email"
                name="email"
                placeholder="someone@example.com"
                onBlur={(e) => validateEmail(e.target.value)}
                onChange={
                  error === "email is required" ? (e) => checkEmpty(e) : null
                }
              />
            </div>

            {/* Message */}
            <label className="col-sm-2 col-form-label mb-2">Message</label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Provide some details about your project"
                style={{ height: "10rem" }}
                onBlur={(e) => checkEmpty(e)}
                onChange={
                  error === "message is required" ? (e) => checkEmpty(e) : null
                }
              />
            </div>

            {/* Optional error message list */}
            {error ? (
              <ul style={errorListStyle}>
                <li>{error}</li>
              </ul>
            ) : (
              <></>
            )}
          </div>

          {/* Submit and Clear buttons */}
          <div className="row">
            <div className="col-12 text-center">
              <button
                type="submit"
                className="btn btn-success mx-2 mb-2"
                disabled={error ? true : false}
              >
                Submit
              </button>
              <button type="reset" className="btn btn-secondary mx-2 mb-2">
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
