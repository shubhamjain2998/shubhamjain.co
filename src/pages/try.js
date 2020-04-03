import React from "react"
import classes from "./try.module.css"
import Header from "../components/header/header"
import tryImage from "../images/browser.svg"
import blob from "../images/blob-shape.svg"

const Try = () => (
  <div className={classes.container}>
    {/* <div className={classes.header}>
      <Header className={classes.header} />
    </div> */}
    <div className={classes.bg}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="bglinear" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c04848" />
            <stop offset="50%" stopColor="#c04848" />
            <stop offset="100%" stopColor="#480048" />
          </linearGradient>
        </defs>
        <path
          fill="url(#bglinear)"
          fillOpacity="1"
          d="M0,192L48,170.7C96,149,192,107,288,122.7C384,139,480,213,576,224C672,235,768,181,864,165.3C960,149,1056,171,1152,181.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
    <div className={classes.bgImg}>
      <img src={tryImage} height="100%" width="100%" alt="image" />
    </div>
    <div className={classes.blobImg}>
      <img src={blob} height="100%" width="100%" alt="image" />
    </div>
    <div className={classes.content}>
      <div className={classes.heading1}>
        <h1>Hi, I'M Shubham Jain, a Javascript and Python developer</h1>
      </div>
    </div>
  </div>
)

export default Try
