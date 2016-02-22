import React, {Component} from 'react';
import RecipeDetail from './RecipeDetail';

class RecipeList extends Component{
  constructor() {
    super();
    this.state = { mounted: false };
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  deleteRecipe(id) {
    this.props._removeRecipe(id);
  }

  editRecipe(id) {
    console.log('id', id);
    this.props._modifyRecipe(id);
  }

  render(){
    let recipeNames = "";
    if(this.state.mounted){
      if(this.props.recipes.length === 0) {
        recipeNames = <h4>* No recipe yet</h4>;
      } else {
        recipeNames = this.props.recipes.map((data, index) => {
          return <RecipeDetail 
            item={data}
            key={index}
            id={index}
            _deleteRecipe={this.deleteRecipe.bind(this)}
            _editRecipe={this.editRecipe.bind(this)} />;
        });
      }
    }

    return (
      <div>
        <h3>Recipe List</h3>
        <div className="panel-group" id="accordion">
          {recipeNames}
        </div>
      </div>
    );
  }
};

export default RecipeList;


