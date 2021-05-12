import React, { useState} from 'react';
import { Button, TextField } from "@material-ui/core";
import "./recipes.css";

const Newrecipe = ({ change, click, list }) => {
  let [ingList, setIngList] = useState([]);
  const newTextField = (
    <TextField
      type="text"
      id="ingredients"
      name="ingredients"
      label="ingredient"
      onChange={list}
    />
  );
  const addListing = () => {
    setIngList((prevState) => [...prevState, newTextField]);
  }
    return (
      <div className="RecipeNew">
        <h3>Add new recipe</h3>
        <form onSubmit={click}>
          <div>
            <TextField
              type="text"
              id="name"
              name="name"
              label="name"
              required
              onChange={change}
            />
          </div>
          <div>
            <TextField
              type="text"
              id="image"
              name="image"
              required
              label="Image"
              onChange={change}
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
              onChange={change}
            />
          </div>
          
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
    
};

export default Newrecipe;