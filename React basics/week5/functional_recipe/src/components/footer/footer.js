import React, { useState } from 'react';
import "./footer.css";
import Newrecipe from "../main/Newrecipe.js";
import axios from 'axios';

const Footer = () => {

    const [newRecipe, setNewRecipe] = useState({
        name: '',
        image: '',
        ingredients: [],
        instructions:''
    });

    const changeHandler = (e) => {
        setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
    };
    const lsitHandler = (e) => {
        setNewRecipe({ ...newRecipe, ingredients: [...newRecipe.ingredients,e.target.value] });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios
          .post(
            "https://mysterious-shore-28269.herokuapp.com/recipe/add",
            JSON.stringify(newRecipe)
          )
          .then((res) => (window.location.href = "/recipes"));
    }
    return (
      <div className="footBar">
        <Newrecipe
          change={changeHandler}
          list={lsitHandler}
          click={submitHandler}
        />
      </div>
    );
};

export default Footer;