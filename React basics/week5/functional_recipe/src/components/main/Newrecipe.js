import React, { useState} from 'react';
import "./recipes.css";
import { Button,Form} from "react-bootstrap";
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
    <Form.Control
      type="text"
      id="ingredients"
      name="ingredients"
      placeholder="ingredient"
      onChange={lsitHandler}
    />
  );

    return (
      <div className="marginTop">
        <h3>Add new recipe</h3>
        <Form className="w-75" onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              onChange={changeHandler}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              id="image"
              name="image"
              placeholder="Image"
              required
              onChange={changeHandler}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ingredients</Form.Label>
            {ingList.map((i) => (
              <div key={ingList.indexOf(i)}>{i}</div>
            ))}
            <div>
              <Button
                type="button"
                variant="outline-danger"
                onClick={addListing}
              >
                + Add ingredient
              </Button>
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Instructions</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              id="instructions"
              name="instructions"
              plceholder="instructions"
              required
              onChange={changeHandler}
            />
          </Form.Group>

          <Button type="submit" variant="warning" block>
            Submit
          </Button>
        </Form>
      </div>
    );
    
};

export default Newrecipe;