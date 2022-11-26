import { React } from "react";

export default function Cards(props) {
  const card = props.projectCards;
  console.log("returns array ", card);

  return (
    <div className="cardList">
      {card.map((card) => (
        <div className="cards-box d-flex ">
          <div className="my-card card py-5 px-2">
            <div className="repo-icon p-2">
              <button className="card-button p-4" href={card.gitLink}>
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
              </button>
            </div>
            <h5 className="card-title">{card.projectName}</h5>
            <div className="card-body p-5">
              <div className="site-icon" id="icon">
                {card.logoImg}
              </div>
              <img className="site-icon" src={card.logoImg} alt="" />
              <p className="card-text-box-p">{card.descript}</p>
              <hr />
              <p className="card-text"> xxxx | xxx | xxxx </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
