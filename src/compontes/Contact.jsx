import React, { useState, useRef } from "react";

function Contact() {
  const form = useRef();

  const [userEmail, setEmail] = useState("");
  const [userName, setName] = useState("");
  const [userMessage, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    document.location.href =
      "mailto:horatiousaharris@gmail.com.com?subject=" +
      encodeURIComponent(userName) +
      "&body=" +
      encodeURIComponent(userMessage);
  };
  return (
    <div>
      <h2 className=" section-header space-section text-center" id="contact">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          width="30px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          ></path>
        </svg>
        Contact
      </h2>

      <div className=" d-flex justify-content-center">
        <form
          ref={form}
          onSubmit={handleFormSubmit}
          className="d-flex flex-column justify-content-center content-card-style"
        >
          <div className="contact-card d-flex flex-column justify-content-center">
            <p className="text-center">
              I would love to hear from you. Please submit the form below to
              send me a message.
            </p>

            <input
              className="contact-name"
              type="text"
              name="name"
              placeholder="Name"
              value={userName}
              onChange={handleInputChange}
            />
            <input
              className="contact-email"
              type="email"
              name="email"
              placeholder="Email"
              value={userEmail}
              onChange={handleInputChange}
            />
            <textarea
              className="contact-message"
              name="message"
              rows="5"
              placeholder="Message"
              value={userMessage}
              onChange={handleInputChange}
            ></textarea>
          </div>
          {errorMessage && (
            <div>
              <p className="">{errorMessage}</p>
            </div>
          )}
          {successMessage && (
            <div>
              <p className="">{successMessage}</p>
            </div>
          )}
          <button className="contact-submit" type="submit" value="Send">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
