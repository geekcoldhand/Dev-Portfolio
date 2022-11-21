import React from "react";

export default function Cards(props) {
  return (
    <div className="cards-box  d-flex ">
      <div class="my-card card hide-card py-5 px-2">
        {/* repo icon  */}
        <div class="repo-icon">
          <button href={props.gitLink}>
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
              ></path>
            </svg>
          </button>
        </div>
        <h5 class="card-title ">{props.projectNames}</h5>
        {/* <!-- WWW icon with site link -->  */}
        <div class="card-body p-5">
          <div class="site-icon" id="icon"></div>
          <img class="site-icon" src={props.logo} alt="" />

          <p class="left-right-box-p">{props.descript}</p>
          <hr />
          <p class="card-text"> xxxx | xxx | xxxx </p>
        </div>
      </div>
    </div>
  );
}
