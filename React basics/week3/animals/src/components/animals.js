import React, {Component} from 'react';
import { animals } from './animals_list.js';
import './animals.css';
import SearchBox from "./searchBox/searchBox.js";




class Animals extends Component  {
    
    state = {
        animals: animals,
        searchInput: ''
    }

    alerter=(e)=> {
        alert (`Hello, my name is ${e}`);
    }

    searchValueHandler=(e)=>{
        this.setState({
          searchInput: e.target.value
        });
        console.log(this.state.searchInput);
    }


    render() {
        const animalFilter = this.state.animals.filter(animal => {
            return animal.name
              .toLowerCase()
              .includes(this.state.searchInput.toLowerCase());
        })
        return (
            <div>
                <SearchBox search={this.searchValueHandler}/>
                <div className="animalContainer">
                    {animalFilter.map(i => {
                        return(
                        <div className="cage" key={i.name}>
                            <h3>{i.name}</h3>
                                <img className="cageImg" src={`https://source.unsplash.com/1600x900/?${i.name}`} alt={i.name}/>
                            <button  value={i} onClick={this.alerter.bind(this,i.name)}>click</button>
                        </div>)
                    })}
                </div>
            </div>
        );
    }
};

export default Animals;