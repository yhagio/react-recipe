import React, {Component} from 'react';
import {render} from 'react-dom';
import RecipeList from './RecipeList';
import AddRecipeForm from './AddRecipeForm';
import EditRecipeForm from './EditRecipeForm';

require('../public/main.scss');

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: props.opened,
      editModalOpen: props.editOpened,
      buttonText: 'ADD RECIPE',
      recipes: [],
      editingData: ''
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
  }

  deleteRecipe(index) {
    this.setState({
      recipes: this.state.recipes.filter((d, i) => i !== index)
    });
  }

  editRecipe(index) {
    console.log('edit', index, this.state.recipes[index]);
    let editingData = this.state.recipes[index];
    this.setState({
      editingData: editingData
    });

    console.log('Set EditingD', this.state.editingData);
    const state = this.state.editModalOpen;
    this.setState({editModalOpen: !state});
  }

  closeEditModal() {
    const state = this.state.editModalOpen;
    this.setState({editModalOpen: !state});
  }

  editRecipeComplete(index, recipe) {
    let recipes = this.state.recipes;
    recipes[index] = recipe;
    this.setState({ recipes });
  }

  render(){
    let editForm = '';
    if (this.state.editingData !== '') {
      console.log('DATA', this.state.editingData);
      editForm = <EditRecipeForm
          show={this.state.editModalOpen}
          onClose={this.closeEditModal.bind(this)}
          data={this.state.editingData}>
        </EditRecipeForm>;
    }
    return (
      <div className="sub-container">
        <button className="btn btn-info" onClick={this.toggleModal.bind(this)}>{this.state.buttonText}</button>
        <AddRecipeForm
          show={this.state.modalOpen}
          onClose={this.toggleModal.bind(this)}
          _handleAddRecipe={this.addRecipe.bind(this)}>
        </AddRecipeForm>
        
        {editForm}

        <h1>Recipe Book</h1>
        <RecipeList 
          recipes={this.state.recipes}
          _removeRecipe={this.deleteRecipe.bind(this)}
          _modifyRecipe={this.editRecipe.bind(this)} />
      </div>
    )
  }
};

render(<App opened={false} editOpened={false} />, document.getElementById('main'));




