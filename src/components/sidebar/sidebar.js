import React from 'react'
import classes from './sidebar.module.css'
import Navbar from '../navbar/navbar'

const Sidebar = () => {
    return (
        <div className={classes.container}>
            <Navbar />
        </div>
    )
}

export default Sidebar