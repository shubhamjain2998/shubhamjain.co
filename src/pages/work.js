import React from "react"
import Layout from "../components/layout/layout"
import Card from "../components/card/card"
import Browser from "../images/browser.svg"
import classes from "./skills.module.css"

export default () => (
  <Layout>
    <div className={classes.container}>
      <div className={classes.heading}>
        <h3>Internships</h3>
      </div>
      <div className={classes.row}>
        <div
          className={classes.project}
          style={{ width: "50%", backgroundColor: "rgba(245, 127, 23,0.4)" }}
        >
          <div className={classes.projectTitle}>
            <h3>Effcon Technology, Raipur</h3>
          </div>
          <div className={classes.projectStack}>
            Worked as an Assistant Trainer.<br></br>(06/2019 - 07/2019)
          </div>
          <div className={classes.projectDescription}>
            <p>
              Responsible for helping students understanding the concepts of
              Python and Django
            </p>
          </div>
        </div>
      </div>
      <div className={classes.heading}>
        <h3>Trainings.</h3>
      </div>
      <div className={classes.row}>
        <div
          className={classes.project}
          style={{ backgroundColor: "rgba(21, 101, 192, 0.4)" }}
        >
          <div className={classes.projectTitle}>
            <h3>Effcon Technology, Raipur</h3>
          </div>
          <div className={classes.projectStack}>
            Machine Learning.<br></br>(06/2019 - 07/2019)
          </div>
          <div className={classes.projectDescription}>
            <p>
              The course covered Data Analysis and Machine Learning via Python
            </p>
          </div>
        </div>
        <div
          className={classes.project}
          style={{ backgroundColor: "rgba(239, 83, 80,0.4)" }}
        >
          <div className={classes.projectTitle}>
            <h3>Effcon Technology, Raipur</h3>
          </div>
          <div className={classes.projectStack}>
            Python and Django<br></br>(06/2018 - 07/2018)
          </div>
          <div className={classes.projectDescription}>
            <p>
              The course covered all the basics of Python and web development
              using Django
            </p>
          </div>
        </div>
      </div>
      {/* <img className={classes.bg} src={Browser} alt="browser-icon"/> */}
    </div>
  </Layout>
)
