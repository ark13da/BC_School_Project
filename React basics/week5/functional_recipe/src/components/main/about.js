import React from 'react';
import "./about.css";

const About = () => {
    return (
      <div className="aboutContent">
        <h1>About</h1>
        <p>
                This project was done as a homework at react21k course in business
                college helsinki.
        </p>
            <br/>
        <p>
          The recipes are fetched from an API provided at
          'https://api.spoonacular.com'. since a free version of the API is being
          used, it has daily request limit. thus, a list of some 95 recipes was fetched using PHP and was saved in a json file where the front end of the application can list recipes from.
        </p>
      </div>
    );
};

export default About;