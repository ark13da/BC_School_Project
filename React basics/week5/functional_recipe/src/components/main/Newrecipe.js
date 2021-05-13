import React, { useState} from 'react';
import { Button, TextField } from "@material-ui/core";
import "./recipes.css";
import axios from "axios";


const Newrecipe = () => {
  let [ingList, setIngList] = useState([]);
  
  const addListing = () => {
    setIngList((prevState) => [...prevState, newTextField]);
  }
const [newRecipe, setNewRecipe] = useState({
  name: "",
  image: "",
  ingredients: [],
  instructions: "",
});

const changeHandler = (e) => {
  setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
};
const lsitHandler = (e) => {
  setNewRecipe({
    ...newRecipe,
    ingredients: [...newRecipe.ingredients, e.target.value],
  });
};
const submitHandler = (e) => {
  e.preventDefault();
  axios
    .post(
      "https://mysterious-shore-28269.herokuapp.com/recipe/add",
      JSON.stringify(newRecipe)
    )
    .then((res) => (window.location.href = "/recipes"));
  };
  const newTextField = (
    <TextField
      type="text"
      id="ingredients"
      name="ingredients"
      label="ingredient"
      onChange={lsitHandler}
    />
  );

    return (
      <div className="marginTop">
        <h3>Add new recipe</h3>
        <form onSubmit={submitHandler}>
          <div>
            <TextField
              type="text"
              id="name"
              name="name"
              label="name"
              required
              onChange={changeHandler}
            />
          </div>
          <div>
            <TextField
              type="text"
              id="image"
              name="image"
              required
              label="Image"
              onChange={changeHandler}
            />
          </div>
          {ingList.map((i) => (
            <div key={ingList.indexOf(i)}>{i}</div>
          ))}
          <div>
            <Button type="button" onClick={addListing}>
              + Add ingredients
            </Button>
          </div>
          <div>
            <TextField
              type="text"
              id="instructions"
              name="instructions"
              required
              label="Instructions"
              onChange={changeHandler}
            />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
    
};

export default Newrecipe;