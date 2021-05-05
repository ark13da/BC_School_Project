import React, { useEffect,useState} from 'react';
import "./recipes.css";
import RecipeCard from "./RecipeCard.js";
import SingleRecipe from "./SingleRecipe.js";
import axios from "axios";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import { ButtonGroup,Button, TextField } from "@material-ui/core";

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
    
  };
  const clearHandler = () => {
    setSearchExists('');
    setSearchTerm('');
    document.getElementById("search").value = "";
  };

  const matchSearch = () => {
    if (searchExists.length) {
      let searchMatch = recipeList.filter(
        (i) => i.title.toLowerCase() === searchExists.toLowerCase()
      );
      setRecipeList(searchMatch);
      document.getElementById("search").innerHTML = '';
      //console.log(searchExists);
      //console.log(searchMatch);
      //console.log(recipeList);
    }
  };
  
  const myFunc = async () => {
    let res = await axios.get("http://localhost:3001/recipes");
    setRecipeList(res.data);
    matchSearch();
    //console.log(recipeList);
    //console.log(recipeList);
    };

  useEffect(() => {
    setIsLoading(true);
    myFunc();
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
      <TextField id="search" label="Search recipe" onChange={changeHandler} />
      <ButtonGroup
        variant="text"
        size="small"
        aria-label="small text button group"
      >
        <Button onClick={searchHandler}>Search</Button>
        <Button onClick={clearHandler}>Clear</Button>
      </ButtonGroup>
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
