import React from 'react';
import "./about.css";

const About = () => {
    return (
        <div className="aboutContent">
            <h1>About</h1>
            <p>This project was requested by margit at react21k course.</p>
            <p>The recipes are privided by an API. since a free version of the API is being used, there is a daily limit of 150 recipes. thus, only a couple of random recipes are being fetched each time not to exceed the limit.</p>
            
        </div>
    );
};

export default About;