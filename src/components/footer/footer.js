import React from "react"
import classes from "./footer.module.css"
import MessageForm from "../form/form";

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
        <h3 style={{textAlign: "center"}}>
          I'm a Computer Science under-graduate who got a good hold over complete web
          development and machine learning and thus looking forward to put up my skills and accept greater challenges. I can help you solve problems,
          build websites or grow existing ones.
        </h3>
      </div>
      <div className={classes.resumeSection}>
        <a
          href="https://drive.google.com/file/d/1DHou9oOn8g9koP-u1i3iHJ9fFlf06FAL/view"
          target="blank"
          rel="noopener"
          style={{ textDecoration: "none" }}
        >
          <div className={classes.resume}>
            <h3>View My Full Resume</h3>
          </div>
        </a>
      </div>
    </div>
    <div className={classes.row} style={{justifyContent: 'center', paddingBottom: '3em'}}>
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
          <a href="https://github.com/shubhamjain2998" target="_blank" rel="noopener">
            <img src={Github} alt="Github" className={classes.socialIcons} />
          </a>
          <a href="https://www.linkedin.com/in/jains1801/" target="_blank" rel="noopener">
            <img src={Linkedin} alt="LinkedIn" className={classes.socialIcons} />
          </a>
          <a
            href="https://www.instagram.com/_shubham_jn/?igshid=63ngerjr1yu6" rel="noopener"
            target="_blank"
          >
            <img src={Insta} alt="Instagram" className={classes.socialIcons} />
          </a>
          <a href="https://www.hackerrank.com/jains1801" target="_blank" rel="noopener">
            <img src={Hackerrank} alt="Hackerrank" className={classes.socialIcons} />
          </a>
        </div>
      </div>
    </div>
    <div className={classes.row}>
      <div className={classes.endSection}>
        <h3>Copyright <span>&copy;</span> Shubham Jain {new Date().getFullYear()}.</h3>
      </div>
    </div>
  </div>
)

export default footer
