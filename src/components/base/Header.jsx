import React from 'react';
import { NavLink } from "react-router-dom";


const Header = () => {

    return (
        <div className="sidenav">
            <NavLink to="/Auth" >Auth</NavLink>
            <NavLink to="/client" >Client</NavLink>

        </div>
    );
}

export default Header;
