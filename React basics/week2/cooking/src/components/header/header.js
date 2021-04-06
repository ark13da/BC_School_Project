import React from 'react';
import "./header.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <ul className="topNav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/recipes">Recipes</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    );
};


const Header = () => {
    return (
        <div className="headBar">
            <h4 className="topLogo"><Link>Logo</Link></h4>
            <Nav/>
        </div>
    );
};

export default Header;