import React, { Component} from 'react';
import "./recipes.css";
import jsonData from "./recipe_list.json";


class Recipes extends Component {
  state = {
    recipes: []
  };

 
  fillTheStore() {
    let recipeList = [];

    let newRecipe = (id, name, img, link) => {
      let recipe = {};
      recipe.id = id;
      recipe.name = name;
      recipe.img = img;
      recipe.link = link; 
      return recipe;
    }
    
    jsonData.forEach(i => {
      let item = newRecipe(i[0].id, i[0].title, i[0].image, i[0].spoonacularSourceUrl);
      recipeList.push(item);
    });

    //filter out duplicates

    this.setState({
      recipes: recipeList
    })
    
  }

  componentDidMount(){
    this.fillTheStore();
 }

  
  render() {

    return (
      <div className="recipesContent">
        {this.state.recipes.map((item) => (
          <div className="recipe" key={item.id}>
            <a href={item.link} target="_blank">
              <img className="thumbnail" src={item.img} alt="foodPic" />
              <h4 className="foodTitle">{item.name}</h4>
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default Recipes;
