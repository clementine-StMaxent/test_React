import React, { Fragment } from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Header = () => {
    return (
        <Fragment>
            <div className="topnav">
                <NavLink to="/Auth" >Auth</NavLink>
                <NavLink to="/client" >Client</NavLink>
                <NavLink to="/dasboard" >Dashboard</NavLink>
            </div>
        </Fragment>
    );
}

export default Header;
