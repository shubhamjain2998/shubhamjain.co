import React from "react"
import Layout from "../components/layout/layout"

import classes from "./skills.module.css"
import SEO from "../components/seo"
export default () => (
  <Layout>
    <SEO title="Project Based On Web Development" />
    <div className={classes.container}>
      <div className={classes.heading}>
        <h3>Projects I have Worked On-</h3>
      </div>
      <div className={classes.row} style={{ justifyContent: "space-evenly" }}>
        <div
          className={classes.project}
          style={{ backgroundColor: "rgba(245, 127, 23,0.4)" }}
        >
          <div className={classes.projectTitle}>
            <h3>Smart Attendance System</h3>
          </div>
          <div className={classes.projectStack}>
            Made With ReactJs, Django and OpenCV.
          </div>
          <div className={classes.projectDescription}>
            <p>
              It automates the Attendance System by using face recognition
              techniques in machine learning and generates a detailed report.
            </p>
          </div>
        </div>

        <div
          className={classes.project}
          style={{ backgroundColor: "rgba(21, 101, 192, 0.4)" }}
        >
          <div className={classes.projectTitle}>
            <h3>Blockchain based Certificate validation System</h3>
          </div>
          <div className={classes.projectStack}>
            Made With Angular 6, Django and Hyperledger Composer.
          </div>
          <div className={classes.projectDescription}>
            <p>
              It provides a portal for validating the genuine certificates of
              scholars. This project is made for Smart India Hackathon 2019
              finale.
            </p>
          </div>
        </div>
      </div>

      <div
        className={classes.row}
        style={{ justifyContent: "space-evenly", margin: "2em" }}
      >
        <div
          className={classes.project}
          style={{ backgroundColor: "rgba(239, 83, 80,0.4)" }}
        >
          <div className={classes.projectTitle}>
            <h3>Education Vending Site</h3>
          </div>
          <div className={classes.projectStack}>
            Made With Angular 6 and Django.
          </div>
          <div className={classes.projectDescription}>
            <p>
              It allows student to write blogs and download some useful study
              materials
            </p>
          </div>
        </div>

        <div
          className={classes.project}
          style={{ backgroundColor: "rgba(67, 160, 71, 0.4)" }}
        >
          <div className={classes.projectTitle}>
            <h3>Digital Library</h3>
          </div>
          <div className={classes.projectStack}>
            Made With Django and Bootstrap.
          </div>
          <div className={classes.projectDescription}>
            <p>It provides a platform to download various ebooks for free</p>
          </div>
        </div>
      </div>

      <div className={classes.row}>
        <h3 className={classes.PS}>
          This portfolio website is also one of my projects, using GastByJS.
        </h3>
      </div>
    </div>
  </Layout>
)
