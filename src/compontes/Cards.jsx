import React, { useRef, useEffect } from "react";

export default function Cards(props) {
  const card = props.projectCards;
  const element = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hide-card");
          entry.target.classList.add("show-card");
        }
      });
    });

    observer.observe(element.current);

    return () => {
      observer.unobserve(element.current);
    };
  }, []);

  return (
    <div id="card-list" className="cardList" key={card.key} ref={element}>
      {card.map((card) => (
        <div className="cards-box">
          <div className="my-card card py-5">
            <div className="card-button p-1 d-flex justify-content-center">
              <a className="repo-icon " href={card.gitLink}>
                <svg
                  className="button-svg w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="card-body">
              <h5 className="card-title text-center">{card.projectName}</h5>

              <img className="card-gif" src={card.demoGif} />
              <p className="card-text-box-p">{card.descript}</p>
              <hr />
              <p className="card-text">
                {" "}
                <img
                  className="card-skills m-1"
                  src={card.tech1}
                  alt=""
                /> | <img className="card-skills m-1" src={card.tech2} alt="" />{" "}
                | <img className="card-skills m-1" src={card.tech3} alt="" />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
