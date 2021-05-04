import React, { useEffect,useState} from 'react';
import "./recipes.css";
import RecipeCard from "./RecipeCard.js";
import SingleRecipe from "./SingleRecipe.js";
import axios from "axios";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";


const Recipes =()=> {
  let { path, url } = useRouteMatch();
  const [recipeList, setRecipeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchExists, setSearchExists] = useState("");
  let history = useHistory();

  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchHandler = () => {
    setSearchExists(searchTerm);
    setSearchTerm("");
    document.getElementById("search").value = "";
  };
  const clearHandler = () => {
    setSearchExists('');
    setSearchTerm('');
  };

  const matchSearch = () => {
    if (searchExists.length) {
      let searchMatch = recipeList.filter(
        (i) => i.title.toLowerCase() === searchExists.toLowerCase()
      );
      setRecipeList(searchMatch);
      document.getElementById("search").innerHTML='';
    }
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:3001/recipes")
      .then((res) => {
        setRecipeList(res.data);
      })
      .then((res) => matchSearch());
    setIsLoading(false);
  }, [searchExists]);

  if (isLoading) {
    return <div className="recipesContent">Loading...</div>;
  }
  /*
  if (!recipeList.length) {
    return (
      <div className="marginTop">
        <input
          type="text"
          id="search"
          placeholder="Search recipe"
          onChange={changeHandler}
        />
        <button type="button" onClick={searchHandler}>
          Search
        </button>
        <button type="button" onClick={clearHandler}>
          clear Search
        </button>
        <p>No match for search term</p>
        <button onClick={() => history.goBack()}>Go back</button>
      </div>
    );
  }
*/
  return (
    <div className="marginTop">
      <input
        type="text"
        id="search"
        placeholder="Search recipe"
        onChange={changeHandler}
      />
      <button type="button" onClick={searchHandler}>
        Search
      </button>
      <button type="button" onClick={clearHandler}>
        Clear search
        </button>
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
