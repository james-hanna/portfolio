import React from "react";
import "./contact.css";
import darkModeLogo from "../../images/contact-logo-dark.png";
import logo from "../../images/contact-logo-light.png";
import Fade from "react-reveal/Fade";
import gmail from "../../images/Gmail-icon.png";
import linked from "../../images/linkedin-icon.png";
import github from "../../images/GitHub-Mark-32px.png";

const Contact = ({ darkMode }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          className="title-logo"
          src={darkMode ? darkModeLogo : logo}
          alt="projects pixel"
        />
      </div>
      <Fade top big>
        <div className={darkMode ? `contact-form-container-dark` : `contact-form-container`} >
          <form action="https://formspree.io/f/xyybqazz" method="POST">
            <Fade top big delay={100}>
              <label for="contact-name">Name:</label>
            </Fade>
            <Fade top big delay={300}>
              <input id="contact-name" type="text" name="name" />
            </Fade>
            <Fade top big delay={500}>
              <label for="contact-email">E-mail:</label>
            </Fade>
            <Fade top big delay={700}>
              <input id="contact-email" type="text" name="email" />
            </Fade>
            <Fade top big delay={900}>
              <label for="leave-a-message">Leave a Suggestion:</label>
            </Fade>
            <Fade top big delay={1100}>
              <textarea id="leave-a-message" name="message"></textarea>
            </Fade>
            <Fade top big delay={1300}>
              <button type="submit">Send!</button>
            </Fade>
          </form>
          <div className="contact-me-btn-container">
            <Fade top big delay={1500}>
              <div className="contact-me-btn">
                <img src={gmail} alt="Gmail icon" onClick={()=> window.open(`mailto:james.hanna87@gmail.com`)}/>
              </div>
            </Fade>
            <Fade top big delay={2100}>
              <div className="contact-me-btn">
                <img src={linked} alt="Linked in icon" onClick={()=> window.open(`https://www.linkedin.com/in/james-hanna-dev/`)} />
              </div>
            </Fade>
            <Fade top big delay={1700}>
              <div className="contact-me-btn">
                <img src={github} alt="Github icon" onClick={()=> window.open(`https://github.com/james-hanna`)}/>
              </div>
            </Fade>
          </div>
        </div>
      </Fade>
      <div className="little-space-contact"></div>
    </div>
  );
};

export default Contact;
