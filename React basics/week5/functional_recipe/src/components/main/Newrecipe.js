import React from 'react';
import { Button, TextField } from "@material-ui/core";
import "./recipes.css";

const Newrecipe = ({ change, click }) => {
    return (
      <div className="RecipeNew">
        <h3>Add new recipe</h3>
        <form onSubmit={click}>
          <div>
            <TextField
              type="text"
              id="title"
              name="title"
              label="Title"
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
          <Button type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
    
};

export default Newrecipe;