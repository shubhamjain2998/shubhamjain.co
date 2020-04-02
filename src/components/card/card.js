import React from "react"
import classes from "./card.module.css"

const Card = props => {
  return (
    <div className={classes.container} style={{backgroundColor: props.backColor}}>
      <div className={classes.heading}>
        <h3>{props.title}</h3>
      </div>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

export default Card;
