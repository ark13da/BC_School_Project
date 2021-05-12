import React from 'react';
import { Link } from "react-router-dom";

const RecipeCard = ({ name, image, link }) => {
    
  return (
    <>
      <div className="recipe">
        <Link to={link}>
          <img className="thumbnail" src={image} alt="foodPic" />
          <p className="foodTitle">{name}</p>
        </Link>
      </div>
    </>
  );
};

export default RecipeCard;