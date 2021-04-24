import React from "react";
import './App.css';
import Header from "./components/header/header.js"
import Footer from "./components/footer/footer.js"
import Home from "./components/main/home.js"
import About from "./components/main/about.js"
import Recipes from "./components/main/recipes.js"

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div >
      <Router className="motherContainer">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/recipes" component={Recipes} />
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
    
  );
}

export default App;
