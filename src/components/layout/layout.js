import React, { useState } from "react"
import Header from "../header/header"
import Footer from "../footer/footer"
import Sidebar from "../sidebar/sidebar"
import classes from "./layout.module.css"

const Layout = props => {
  const [sideBar, setSide] = useState(true)

  const toggleSidebar = () => {
    setSide(!sideBar)
  }

  const sideMenu = (
    <div className={classes.row}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.backdrop} onClick={toggleSidebar}></div>
    </div>
  )

  return (
    <>
      
      <Header isMenuButtonClicked={toggleSidebar} />
      <div className={classes.container}>
        {sideBar ? null : sideMenu}
        {props.children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
