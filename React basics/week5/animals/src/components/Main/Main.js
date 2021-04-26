import axios from "axios";
import React, { useState } from "react";
import AnimalList from '../animals/AnimalList';
import AnimalNew from '../animals/AnimalNew';



const Main = () => {
  
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    aclass: "",
    img: "",
    desc: "",
    link: ""
  });

  const changeHandler = (e) => {
    setNewAnimal({...newAnimal, [e.target.name]: e.target.value})
  }
  const submitAnimal = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/animals", newAnimal);
  }

  return (
    <main>
      <AnimalList />
      <AnimalNew change={changeHandler} click={ submitAnimal} />
    </main>
  );
};

export default Main;
