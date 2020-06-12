import React from "react"
import classes from "./footer.module.css"
import MessageForm from "../form/form"
import Wave from "../wave/wave"

import coderImage from "../../images/code.svg"
import Mail from "../../images/mail-outline.svg"
import Phone from "../../images/call-outline.svg"
import Github from "../../images/logo-github.svg"
import Linkedin from "../../images/logo-linkedin.svg"
import Insta from "../../images/logo-instagram.svg"
import Hackerrank from "../../images/icons8-hackerrank.svg"

const footer = () => (
  <div className={classes.container}>
    <div className={classes.row}>
      <div className={classes.heading}>
        <h3 style={{ textAlign: "center" }}>
          I'm a Computer Science under-graduate who got a good hold over
          complete web development and machine learning and thus looking forward
          to put up my skills and accept greater challenges. I can help you
          solve problems, build websites or grow existing ones.
        </h3>
      </div>
      <div className={classes.resumeSection}>
        <a
          href="https://drive.google.com/file/d/1GWxRVTPFHyBepp2wKcQlaCgJp34TE6j_/view?usp=sharing"
          target="blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div className={classes.resume}>
            <h3>View My Full Resume</h3>
          </div>
        </a>
      </div>
    </div>
    <div
      className={classes.row}
      style={{ justifyContent: "center", paddingBottom: "3em" }}
    >
      <MessageForm />
    </div>
    <div className={classes.row}>
      <div className={classes.contact}>
        <div className={classes.contactHeading}>
          <h1>Reach Me Via -</h1>
        </div>
        <div className={classes.info}>
          <div>
            <img src={Mail} alt="MailIcon" className={classes.icon} />
          </div>
          <div>
            <h3>jains1801@gmail.com</h3>
          </div>
        </div>
        <div className={classes.info}>
          <div>
            <img src={Phone} alt="PhoneIcon" className={classes.icon} />
          </div>
          <div>
            <h3>9669611093</h3>
          </div>
        </div>
      </div>
      <div className={classes.contact}>
        <div className={classes.contactHeading}>
          <h1 style={{ textAlign: "center" }}>Follow Me On -</h1>
        </div>
        <div className={classes.socialInfo}>
          <a
            href="https://github.com/shubhamjain2998"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="Github" className={classes.socialIcons} />
          </a>
          <a
            href="https://www.linkedin.com/in/jains1801/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Linkedin}
              alt="LinkedIn"
              className={classes.socialIcons}
            />
          </a>
          <a
            href="https://www.instagram.com/_shubham_jn/?igshid=63ngerjr1yu6"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={Insta} alt="Instagram" className={classes.socialIcons} />
          </a>
          <a
            href="https://www.hackerrank.com/jains1801"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Hackerrank}
              alt="Hackerrank"
              className={classes.socialIcons}
            />
          </a>
        </div>
      </div>
    </div>
    <div className={classes.row}>
      <div className={classes.endSection}>
        <h3>
          Copyright <span>&copy;</span> Shubham Jain {new Date().getFullYear()}.
        </h3>
      </div>
    </div>
    {/* <div className={classes.blob}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 310 350"
      >
        <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
      </svg>
    </div> */}
    <Wave bottom={0} />
    <Wave top={"-5em"} invert />
  </div>
)

export default footer
