
import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import NextIcon from "../images/next.svg"
import coderImage from "../images/code.svg"
import classes from "./index.module.css"
import BackgroundImage from "../components/background/background"

export default () => {
  const nextIcon = () => {
    navigate("/skills")
  }

  return (
    <Layout>
      <SEO title="Web Developer Portfolio Website" />
      <div className={classes.row}>
        <BackgroundImage>
          <div className={classes.backdrop}>
            <div className={classes.content}>
              <div className={classes.heading1}>
                <h1>Hi, I'M Shubham Jain, a Javascript and Python developer</h1>
              </div>
            </div>
          </div>
          <div className={classes.image}>
            <img
              src={coderImage}
              alt="Coder Vector"
              height="100%"
              style={{ paddingRight: "3em" }}
            />
          </div>
          <div className={classes.nextPage}>
            <div className={classes.nextIcon} onClick={nextIcon}>
              <img src={NextIcon} alt="NextIcon" width="100%" height="100%" />
            </div>
          </div>
        </BackgroundImage>
      </div>
    </Layout>
  )
}
