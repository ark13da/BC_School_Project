import React from 'react';
import { Link } from "react-router-dom";

const AnimalCard = ({ name, aclass, img, link, desc }) => {
    const truncate = (str, wordNo) => {
        return str.split(" ").splice(0, wordNo).join(" ");
    }
    return (
        <div className="animalCard">
            
            <img className="thumbnail" src={img} alt={name} />
            <h3>{name}</h3>
                <em>{aclass}</em>
            <p>{truncate(desc, 30)} ...</p>
            <Link to={`/${link}`}>Link</Link>
            {/* 
            <a href={link} target="_blank" rel="noreferrer"> Read more</a>
            */}
        </div>
    );
};

export default AnimalCard;