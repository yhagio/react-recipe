import React, {Component} from 'react';
import {render} from 'react-dom';
import RecipeList from './RecipeList';
import AddRecipeForm from './AddRecipeForm';

require('../public/main.scss');

class App extends Component{
  constructor() {
    super();
    this.state = {
      recipes: []
    };
    // this.addRecipe = this.addRecipe.bind(this);
  }

  addRecipe(recipe){
    let allRecipes = this.state.recipes.concat([recipe]);
    this.setState({
      recipes: allRecipes
    });
  }

  render(){
    return (
      <div className="container">
        <h1>Recipe Book</h1>
        <RecipeList recipes={this.state.recipes} />
        <AddRecipeForm _handleAddRecipe={this.addRecipe.bind(this)} />
      </div>
    )
  }
};

render(<App/>, document.getElementById('main'));