import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";



const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeclassname={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeclassname={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="#" activeclassname={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="#" activeclassname={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="#" activeclassname={classes.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar