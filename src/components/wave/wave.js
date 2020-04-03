import React from "react"
import classes from "./wave.module.css"

const Wave = props => {
  const SVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={{ backgroundColor: "transparent" }}
    >
      <defs>
        <linearGradient id="bglinear" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(13,24,29)" />
          <stop offset="50%" stopColor="rgba(13,24,29)" />
          <stop offset="100%" stopColor="rgba(22,38,47)" />
        </linearGradient>
      </defs>
      <path
        fill="url(#bglinear)"
        fillOpacity="1"
        d="M0,192L48,170.7C96,149,192,107,288,122.7C384,139,480,213,576,224C672,235,768,181,864,165.3C960,149,1056,171,1152,181.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  )

  const invertedSVG = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{
          background:
            "linear-gradient(to bottom, rgba(13,24,29,1), rgba(13,24,29), rgba(32,58,77))",
        }}
      >
        <path
          fill="rgb(16, 32, 37)"
          fillOpacity="1"
          d="M0,192L48,170.7C96,149,192,107,288,122.7C384,139,480,213,576,224C672,235,768,181,864,165.3C960,149,1056,171,1152,181.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </>
  )

  return (
    <div
      className={classes.bg}
      style={{
        position: "absolute",
        width: "100%",
        top: props.top,
        bottom: props.bottom,
      }}
    >
      {props.invert ? invertedSVG : SVG}
    </div>
  )
}

export default Wave
