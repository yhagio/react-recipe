import React, {Component} from 'react';
import {render} from 'react-dom';
import RecipeList from './RecipeList';
import AddRecipeForm from './AddRecipeForm';
import EditRecipeForm from './EditRecipeForm';

require('../public/main.scss');

let recipeArray = [];

let sample = {
  title: 'Oyakodon',
  ingredients: ['Onions', 'Soy Sauce', 'Eggs', 'Chicken', 'Sugar', 'Sake', 'Rice']
};

let sample2 = {
  title: 'Katsudon',
  ingredients: ['Onions', 'Soy Sauce', 'Eggs', 'Pork', 'Sake', 'Mirin', 'Rice']
};

recipeArray.push(sample);
recipeArray.push(sample2);

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: props.opened,
      editModalOpen: props.editOpened,
      buttonText: 'ADD RECIPE',
      recipes: recipeArray,
      editingData: '',
      editingIndex: ''
    };
  }

  toggleModal() {
    const state = this.state.modalOpen;
    this.setState({modalOpen: !state});

    if (this.state.buttonText === 'ADD RECIPE') {
      this.setState({
        buttonText: 'CLOSE'
      });
    } else {
      this.setState({
        buttonText: 'ADD RECIPE'
      });
    }
  }

  addRecipe(recipe) {
    let allRecipes = this.state.recipes.concat([recipe]);
    this.setState({
      recipes: allRecipes
    });
    localStorage.setItem('recipes', JSON.stringify(recipe));
  }

  deleteRecipe(index) {
    this.setState({
      recipes: this.state.recipes.filter((d, i) => i !== index)
    });
  }

  editRecipe(index) {
    let editingData = this.state.recipes[index];

    this.setState({
      editingIndex: index,
      editingData: editingData
    });

    const state = this.state.editModalOpen;
    this.setState({editModalOpen: !state});
  }

  closeEditModal() {
    const state = this.state.editModalOpen;
    this.setState({editModalOpen: !state});
    this.setState({
      editingIndex: '',
      editingData: ''
    });
  }

  editRecipeComplete(index, recipe) {
    let recipes = this.state.recipes;
    recipes[index] = recipe;
    this.setState({ recipes: recipes });
    this.setState({
      editingIndex: '',
      editingData: ''
    });
  }

  render(){
    let editForm = '';
    if (this.state.editingData !== '') {
      editForm = <EditRecipeForm
          show={this.state.editModalOpen}
          onClose={this.closeEditModal.bind(this)}
          data={this.state.editingData}
          index={this.state.editingIndex}
          _handleEditRecipe={this.editRecipeComplete.bind(this)}>
        </EditRecipeForm>;
    }

    return (
      <div className="sub-container">
        <AddRecipeForm
          show={this.state.modalOpen}
          onClose={this.toggleModal.bind(this)}
          _handleAddRecipe={this.addRecipe.bind(this)}>
        </AddRecipeForm>
        
        {editForm}

        <h1>Recipe Book</h1>
        <div className="well">
          <RecipeList 
            recipes={this.state.recipes}
            _removeRecipe={this.deleteRecipe.bind(this)}
            _modifyRecipe={this.editRecipe.bind(this)} />
        </div>
        <button className="btn btn-info" onClick={this.toggleModal.bind(this)}>{this.state.buttonText}</button>

      </div>
    )
  }
};

render(<App opened={false} editOpened={false} />, document.getElementById('main'));




