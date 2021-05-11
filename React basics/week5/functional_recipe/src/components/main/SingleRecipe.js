import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Button from "@material-ui/core/Button";

const SingleRecipe = () => {
    let { id } = useParams();
    const [newRecipe, setNewRecipe] = useState();
    let history = useHistory();

    useEffect(() => {
      if (!newRecipe) {
        //axios.get("http://localhost:3001/recipes/" + id).then((res) => {
        //  setNewRecipe(res.data);
        axios.get("http://localhost:5000/recipes/" + id).then((res) => {
          setNewRecipe(res.data);
        });
      }
    });

    let recipeData = undefined;
    if (!newRecipe) {
      recipeData = <div>Loading...</div>;
    } else {
        recipeData = (
          <>
            <div className="recipe">
              <img className="thumbnail" src={newRecipe.image} alt="foodPic" />
              <p className="foodTitle">{newRecipe.title}</p>
            </div>
            <Button variant="outlined" onClick={() => history.goBack()}>Go back</Button>
            
          </>
        );
    }
    return <div>{recipeData}</div>;
};

export default SingleRecipe;
