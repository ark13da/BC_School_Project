import React, { useState } from 'react';
import "./footer.css";
import Newrecipe from "../main/Newrecipe.js";
import axios from 'axios';

const Footer = () => {

    const [newRecipe, setNewRecipe] = useState({
        title: '',
        image:''
    });

    const changeHandler = (e) => {
        setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:5000", newRecipe)
          .then((res) => (window.location.href = "/recipes"));
    }
    return (
      <div className="footBar">
            <Newrecipe change={changeHandler} click={submitHandler} />
      </div>
    );
};

export default Footer;