import React, { useState } from "react";
import addRes from "./screenshots/addRes.png";
import addTable from "./screenshots/addTable.png";
import dashboard from "./screenshots/dashboard.png";
import search from "./screenshots/search.png";


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
            <p style={{marginTop: "10px", marginLeft: "10px"}}>yo</p>
          </div>
          <div className="project-description">
            <p style={{marginTop: "10px", marginLeft: "10px"}}>yo</p>
          </div>
          <div className="links-to-project">
            <p style={{marginTop: "10px", marginLeft: "10px"}}>yo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
