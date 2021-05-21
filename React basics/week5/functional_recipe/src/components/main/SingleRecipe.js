import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Button} from "react-bootstrap";

const SingleRecipe = () => {
    let { id } = useParams();
    const [newRecipe, setNewRecipe] = useState();
    let history = useHistory();

    useEffect(() => {
      if (!newRecipe) {
        axios
          .get("https://mysterious-shore-28269.herokuapp.com/recipe/find/" + id)
          .then((res) => {
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
            <div className="recipesContent">
              <div className="recipeSinglePart">
                <img
                  className="thumbnail"
                  src={newRecipe.image}
                  alt="foodPic"
                />
              </div>
              <div className="recipeSinglePart">
                <h2 className="foodTitle">{newRecipe.name}</h2>
                <h4>Ingredients:</h4>
                <ul>
                  {newRecipe.ingredients.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <h4>Instructions:</h4>
                <p>{newRecipe.instructions}</p>
              </div>
            </div>
            <Button variant="warning" onClick={() => history.goBack()}>
              Go back
            </Button>
          </>
        );
    }
    return <div>{recipeData}</div>;
};

export default SingleRecipe;
