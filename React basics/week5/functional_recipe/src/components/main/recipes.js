import React, { useEffect,useState} from 'react';
import "./recipes.css";
import RecipeCard from "./RecipeCard.js";
import SingleRecipe from "./SingleRecipe.js";
import axios from "axios";
import { Switch, Route, useRouteMatch } from "react-router-dom";


const Recipes =()=> {
  let { path, url } = useRouteMatch();
  const [recipeList, setRecipeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState();
  const [searchExists,setSearchExists] = useState(false);
  
  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
  }
  const searchHandler = () => {
    if (searchTerm) {
      let searchMatch = recipeList.filter(
        (i) => i.title.toLowerCase() === searchTerm.toLowerCase()
      );
      if (searchMatch.length) {
        setRecipeList(searchMatch);
        setSearchExists(true);
      }
    }
  };
  
  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:3001/recipes").then((res) => {
      setRecipeList(res.data);
    });
    
    setIsLoading(false);
  }, [searchExists]);

  if (isLoading) {
    return (
      <div className="recipesContent">
      Loading...
      </div>
    );
  }
  if (!recipeList.length) {
    return (
      <div className="marginTop">
        No match for search term
      </div>
    );
  }

  return (
    <div className="marginTop">
      <input
        type="text"
        id="search"
        placeholder="Search recipe"
        onChange={changeHandler}
      />
      <button type="button" onClick={searchHandler}>Search</button>
      <div className="recipesContent">
        <Switch>
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
    </div>
  );
  
}

export default Recipes;
