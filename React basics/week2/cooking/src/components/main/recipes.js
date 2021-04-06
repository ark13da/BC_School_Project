import React, { Component} from 'react';
import "./recipes.css";
import { config } from "./config.js"


class Recipes extends Component {

    state = {
        data: []
    };
    
    componentDidMount() {
        const url = "https://api.spoonacular.com/recipes/random?apiKey=" + config.recipeKey;
            fetch(url).then(res => {
                if (res.ok) {
                    //console.log(res);
                    return res.json();
                } else {
                    console.log('error');
                }
            })
                .then(json => {
                    this.setState({
                        data: [...this.state.data,json.recipes[0]]
                    })
                    //result = json.recipes[0];
                    //randomRecipe.push(result);
                    //image
                    //summary
                    //instructions
                    //[array]extendedIngredients.originalString
                    //sourceUrl
                    //console.log(result);
                    //console.log(result.image);
                    //randomRecipe.push(<div className="recipe"><img className="thumbnail" src={result.image} alt="foodPic" /><h3>{result.title}</h3></div>);
                })
                .catch(err => {
                    console.log('error');
                })
    }

    render() {
        return (
            <div className="recipesContent">
                {this.state.data.map(item=>(
                    <div className="recipe">
                        <img className="thumbnail" src={item.image} alt="foodPic" />
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
        );
    }
}

export default Recipes;
