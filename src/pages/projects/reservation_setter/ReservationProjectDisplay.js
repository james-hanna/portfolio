import React, { useState } from "react";
import addRes from "./screenshots/addRes.png";
import addTable from "./screenshots/addTable.png";
import dashboard from "./screenshots/dashboard.png";
import search from "./screenshots/search.png";
import github from "../../../images/GitHub-Mark-32px.png";

export default function ReservationProjectDisplay() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <div className="project-content-container">
      <div className="screenshot-row">
        <div className="screenshot">
          <img
            src={dashboard}
            alt="2cb"
            className="upper-img"
            onClick={() => setOpen(!open)}
          />
          {open && (
            <img
              src={dashboard}
              alt="full-size-img"
              className="full-size-img"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>

        <div className="screenshot">
          <img
            src={addRes}
            alt="2cb"
            className="upper-img"
            onClick={() => setOpen1(!open1)}
          />
          {open1 && (
            <img
              src={addRes}
              alt="full-size-img"
              className="full-size-img"
              onClick={() => setOpen1(!open1)}
            />
          )}
        </div>

        <div className="screenshot">
          <img
            src={addTable}
            alt="2cb"
            className="upper-img"
            onClick={() => setOpen2(!open2)}
          />
          {open2 && (
            <img
              src={addRes}
              alt="full-size-img"
              className="full-size-img"
              onClick={() => setOpen2(!open2)}
            />
          )}
        </div>

        <div className="screenshot">
          <img
            src={search}
            alt="2cb"
            className="upper-img"
            onClick={() => setOpen3(!open3)}
          />
          {open3 && (
            <img
              src={addRes}
              alt="full-size-img"
              className="full-size-img"
              onClick={() => setOpen3(!open3)}
            />
          )}
        </div>
      </div>
      <div className="project-info-row">
        <div className="project-info-box">
          <div className="technology-used">
            <div className="project-info-title">
              <h4>Stack Used:</h4>
            </div>
            <div className="make-me-a-row">
              <div className="stack-titles">
                <h5>Front-end:</h5>
                <h5>Back-end:</h5>
              </div>
              <div className="stack-content">
                <p>Node.js, Express.js, RESTful API Endpoints, Postgres</p>
                <p> HTML5, CSS3, JavaScript ES6, React</p>
              </div>
            </div>
          </div>
          <div className="project-description">
            <div className="project-info-title">
              <h4>Description:</h4>
            </div>
            <p>
              This is an application used by restaurant employees to schedule
              reservations.
            </p>
          </div>
          <div className="links-to-project">
            <div className="project-info-title">
              <h4>Links:</h4>
            </div>
            <div className="link-icons">
              <label>
                Live example:
                <button
                  class="button"
                  onClick={() =>
                    window.open(
                      "https://reservation-app-frontend.vercel.app/dashboard"
                    )
                  }
                >
                  <span class="icon">Try It Now!</span>
                </button>
              </label>
              <label>
                Repo:
              <img
                src={github}
                alt="github icon"
                onClick={() =>
                  window.open("https://github.com/james-hanna/ReservationApp")
                }
              />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
