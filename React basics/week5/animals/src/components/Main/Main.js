import axios from "axios";
import React, { useState, useEffect } from "react";
import AnimalNew from '../animals/AnimalNew';
import AnimalCard from "../animals/AnimalCard";
import AnimalSingle from "../animals/AnimalSingle";
import { Switch, Route } from "react-router-dom";


const Main = () => {
  
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    aclass: "",
    img: "",
    desc: "",
    //link: ""
  });

  const [animals, setAnimals] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3001/animals").then((res) => {
      setAnimals(res.data);
    });
  }, [])
  
  const changeHandler = (e) => {
    setNewAnimal({...newAnimal, [e.target.name]: e.target.value})
  }
  const submitAnimal = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/animals", newAnimal)
      .then(() => {
        return axios.get("http://localhost:3001/animals").then((res) => {
          setAnimals(res.data);
        });
      })
    e.target.reset();
  }
  
  return (
    <main>
      <Switch>
        <Route path="/:id">
          <AnimalSingle />
        </Route>
        <Route path="/" exact>
          <div className="AnimalList">
            {animals.map((animal) => (
              <AnimalCard key={animal.id} {...animal} link={animal.id} />
            ))}
          </div>
          <AnimalNew change={changeHandler} click={submitAnimal} />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
