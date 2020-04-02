import React from "react"
import { Link } from 'gatsby'

import classes from './navbar.module.css'

const navbar = () => (
  <div className={classes.navbar}>
    <div className={classes.name}>
      <h1>SJ</h1>
    </div>
    <div className={classes.menu}>
      <Link
        to="/"
        className={classes.menuButton}
        activeStyle={{ backgroundColor: "#21424a" }}
      >
        Home
      </Link>
      <Link
        to="/skills"
        className={classes.menuButton}
        activeStyle={{ backgroundColor: "#21424a" }}
      >
        Skills
      </Link>
      <Link
        to="/project"
        className={classes.menuButton}
        activeStyle={{ backgroundColor: "#21424a" }}
      >
        Projects
      </Link>
      <Link
        to="/work"
        className={classes.menuButton}
        activeStyle={{ backgroundColor: "#21424a" }}
      >
        Work
      </Link>
    </div>
  </div>
)

export default navbar;
