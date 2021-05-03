import React, { useEffect,useState} from 'react';
import "./recipes.css";
import RecipeCard from "./RecipeCard.js";
import SingleRecipe from "./SingleRecipe.js";
import axios from "axios";
import { Switch, Route, useRouteMatch } from "react-router-dom";


const Recipes =()=> {
  let { path, url } = useRouteMatch();
  const [recipeList, setRecipeList] = useState([]);
  //const [isLoading, setIsLoading] = useState(true);

  console.log()
  
  useEffect(() => {
    axios.get("http://localhost:3001/recipes").then((res) => {
      setRecipeList(res.data);
    });
  }, []);
/*
  if (isLoading) {
    return (
      <div className="recipesContent">
      Loading...
      </div>
    );
  }
*/
  return (
    <div className="recipesContent">
      <Switch>
        {/*
        <Route path="/:id">
          <SingleRecipe/>
        </Route>*/}
        <Route path="/recipes" exact>
            {recipeList.map((item) => (
              <RecipeCard
                key={item.id}
                link={`${url}/${item.id}`}
                image={item.image}
                title={item.title}
              />
            ))}

        </Route>
        <Route path={`${path}/:id`}>
          <SingleRecipe />
        </Route>
      </Switch>
    </div>
  );
  
}

export default Recipes;
