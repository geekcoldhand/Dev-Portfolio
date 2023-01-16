import React, { useState, useRef } from "react";
import resume from "../img/skills/Horatious.resume ATS .pdf";

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
    setSuccessMessage("sucessful input");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    document.location.href =
      "mailto:horatiousaharris@gmail.com.com?subject=" +
      encodeURIComponent(userName) +
      "&body=" +
      encodeURIComponent(userMessage);
  };

  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open(resume, "_blank");
  };

  return (
    <div className="contact ">
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

      <div className="d-flex justify-content-center flex-column">
        <div className="d-flex justify-content-center flex-column align-items-center">
         
          <button className="resume-pdf" onClick={handleResumeClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="66"
              height="66"
              fill="currentColor"
              className="bi bi-filetype-pdf"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"
              />
              resume
            </svg>
          </button>
          <label htmlFor="">resume</label>
        </div>
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
