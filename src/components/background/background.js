import React from "react"
import { graphql, StaticQuery } from "gatsby"
import classes from './background.module.css'
// import styled from 'styled-components'

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ( props) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "developerCom.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={classes.background}
          fluid={imageData}
          style={{ width: "100%", minHeight: "90vh" }}
        >
          {props.children}
        </BackgroundImage>
      )
    }}
  />
)

// const StyledBackgroundSection = styled(BackgroundSection)`
//   width: 100%;
//   min-height: 90vh
// `

export default BackgroundSection
