import React, {Component} from 'react';

class AddRecipeForm extends Component{

  handleAddRecipe(e){
    e.preventDefault();

    let title = this.refs.title.value.trim();
    let ingredients = this.refs.ingredients.value.trim();
    let recipeObject = {
      title: title,
      ingredients: ingredients
    };

    this.props._handleAddRecipe(recipeObject);

    this.refs.title.value = "";
    this.refs.ingredients.value = ""

  }

  render(){
    return (
      <form onSubmit={this.handleAddRecipe.bind(this)}>
        <input 
          type="text"
          ref="title"
          placeholder="Title"
          autoFocus />
        <input 
          type="text"
          ref="ingredients" 
          placeholder="Ingredients"/>
        <input 
          type="submit"
          ref="button"
          value="Add" />
      </form>
    );
  }
};

export default AddRecipeForm;