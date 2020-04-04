import React, { useState, useEffect } from "react"
import classes from "./circle.module.css"

const ProgressRing = props => {
  const [dynamicRadius, setRadius] = useState(props.radius)
  const [dynamicStroke, setdynamicStroke] = useState(props.stroke)
  const [toupdate, settoupdate] = useState(0)

  const normalizedRadius = dynamicRadius - dynamicStroke * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const updateDashoffset =
    circumference - (props.progress / 100) * circumference

  // const [showPercent, setshowPercent] = useState(strokeDashoffset)
  const [dashOffset, setdashOffset] = useState(circumference)

  useEffect(() => {
    window.addEventListener("resize", resize)
    setdashOffset(updateDashoffset)
    resize()
  })

  const updateRadius = () => {
    setdynamicStroke(props.stroke - 4)
    setRadius(props.radius - 40)
    settoupdate(toupdate + 1)
  }

  const resize = () => {
    if (window.innerWidth <= 600 && toupdate <= 1) {
      updateRadius()
    }
  }

  const showPercent = 100 - Math.round((dashOffset / circumference) * 100)

  return (
    // background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    <div className={classes.container}>
      <svg height={dynamicRadius * 2} width={dynamicRadius * 2}>
        <defs>
          <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f6d365" />
            <stop offset="100%" stopColor="#fda085" />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="text" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFEFBA" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
        </defs>
        <g>
          <circle
            stroke="url(#linear)"
            fill="transparent"
            strokeDasharray={circumference + " " + circumference}
            style={{ strokeDashoffset: dashOffset }}
            strokeWidth={dynamicStroke}
            r={normalizedRadius}
            cx={dynamicRadius}
            cy={dynamicRadius}
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            fill="url(#text)"
            fontSize="2.6em"
            fontFamily="Arial"
            dy=".3em"
          >
            {showPercent}%
          </text>
          Sorry, your browser does not support inline SVG.
        </g>
      </svg>
    </div>
  )
}

export default ProgressRing
