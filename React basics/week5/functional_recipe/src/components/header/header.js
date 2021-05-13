import React from 'react';
import "./header.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
      <div>
        <ul className="topNav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/recipes">Recipes</NavLink>
          </li>
          <li>
            <NavLink to="/newRecipe">Add</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    );
};


const Header = () => {
  return (
    <div className="headBar">
      <h4 className="topLogo">
        <NavLink to="/">
          <img
            className="logo"
            src="https://freepngimg.com/thumb/cooking/29443-1-cooking-file-thumb.png"
            alt="logo"
          />
        </NavLink>
      </h4>
      <Nav />
    </div>
  );
};

export default Header;