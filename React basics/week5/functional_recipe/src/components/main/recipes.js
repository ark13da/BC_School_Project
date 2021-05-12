import React, { useEffect,useState} from 'react';
import "./recipes.css";
import RecipeCard from "./RecipeCard.js";
import SingleRecipe from "./SingleRecipe.js";
import axios from "axios";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { ButtonGroup,Button, TextField } from "@material-ui/core";

const Recipes =()=> {
  let { path, url } = useRouteMatch();
  const [recipeList, setRecipeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchExists, setSearchExists] = useState("");
  //let history = useHistory();

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


  useEffect(() => {
    setIsLoading(true);

    const myFunc = async () => {
      let res = await axios.get(
        "https://mysterious-shore-28269.herokuapp.com/recipe/all"
      );
      if (searchExists.length) {
        let searchMatch = res.data.filter(
          (i) => i.name.toLowerCase() === searchExists.toLowerCase()
        );
        setRecipeList(searchMatch);
        document.getElementById("search").innerHTML = "";
      } else {
        setRecipeList(res.data);
      }
    };
    myFunc();

    setIsLoading(false);
  }, [searchExists]);


  if (isLoading) {
    return <div className="recipesContent">Loading...</div>;
  }

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
                name={item.name}
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
