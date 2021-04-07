import React, { Component} from 'react';
import "./recipes.css";
import { config } from "./config.js"


class Recipes extends Component {

    state = {
        data: []
    };


    
    fillTheStore() {
        const url = "https://api.spoonacular.com/recipes/random?apiKey=" + config.recipeKey;
            fetch(url).then(res => {
                if (res.ok) {
                
                    return res.json();
                } else {
                    console.log('error');
                }
            })
                .then(json => {
                    
                    this.setState({
                        
                        data: [...this.state.data, json.recipes[0]]
                    });

                    //image
                    //summary
                    //instructions
                    //[array]extendedIngredients.originalString
                    //sourceUrl
                })
                .catch(err => {
                    console.log('error');
                })
    }

   /* 
   //coverting strigified array back to array is challenging 
   componentDidMount() {
        if (this.storage.getItem('storedRecipes') === null || !JSON.parse(this.storage.getItem('storedRecipes')).length){
            for (let i = 0; i < 3; i++) {
            this.fillTheStore();
            }
            this.storage.setItem('storedRecipes', this.recipeList.toString());
            this.setState({
            data: JSON.parse(this.storage.getItem('storedRecipes'))
            });
        }

    }*/
    componentDidMount() {
        if (!this.state.data.length) {
            for (let i = 0; i < 4; i++) {
                this.fillTheStore();
            }
            
        }

    } 


    render() {
        
        return (
            <div className="recipesContent">
                {this.state.data.map(item=>
                    <div className="recipe" key={ item.id}>
                        <img className="thumbnail" src={item.image} alt="foodPic" />
                        <h4 className="foodTitle">{item.title}</h4>
                    </div>
                )}
            </div>
        );
    }
}

export default Recipes;
