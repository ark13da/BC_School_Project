import React, { useEffect,useState} from 'react';
import "./recipes.css";
import RecipeCard from "./RecipeCard.js";
import SingleRecipe from "./SingleRecipe.js";
import axios from "axios";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Button, InputGroup, FormControl } from "react-bootstrap";

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
    setTimeout(
      () => {
        myFunc();
        setIsLoading(false);  
      }, 1000);

    
  }, [searchExists]);


  if (isLoading) {
    return (
      <div className="marginTop">
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div className="marginTop">
        <InputGroup className="mb-3 w-50">
          <FormControl
            placeholder="Search recipe"
            aria-label="Search recipe"
            aria-describedby="basic-addon2"
            onChange={changeHandler}
            id="search"
          />
          <InputGroup.Append>
            <Button variant="warning" onClick={searchHandler}>
              Search
            </Button>
            <Button variant="danger" onClick={clearHandler}>
              Clear
            </Button>
          </InputGroup.Append>
        </InputGroup>

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

}

export default Recipes;
