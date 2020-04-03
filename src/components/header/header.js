import React, { useState, useEffect } from "react"
import classes from "./header.module.css"

import MenuIcon from "../../images/menu-outline.svg"
import Navbar from "../navbar/navbar"

const Header = (props) => {
  const [hide, setHide] = useState(true)
  let nav = <Navbar />

  useEffect(() => {
    window.addEventListener("resize", resize)
    resize()
  }, [])

  const dekhe = currentHideNav => {
    setHide(!currentHideNav)
  }

  const showMenu = () => {
    props.isMenuButtonClicked();
  }

  const resize = () => {
    let currentHideNav = window.innerWidth <= 700
    dekhe(currentHideNav)
  }

  const mobileMenu = (
    <div style={{width: '20%', height: '100%', cursor: 'pointer'}} onClick={showMenu}>
      <img src={MenuIcon} alt="MenuIcon" height='100%' width='100%' />
    </div>
  )

  return (
    <div className={classes.container}>
      {hide ? <Navbar /> : mobileMenu}
    </div>
  )
}

export default Header
