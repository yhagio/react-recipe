import React, {Component} from 'react';

class RecipeList extends Component{
  constructor() {
    super();
    this.state = { mounted: false };
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render(){
    let recipeNames = "";
    if(this.state.mounted){
      
      if(this.props.recipes.length === 0) {
        recipeNames = <li><h4>No recipe yet</h4></li>;
      } else {
        recipeNames = this.props.recipes.map((data, index) => {
          return (
            <li key={index}>
              <p><strong>{data.title}</strong></p>
              <p>{data.ingredients}</p>
            </li>
          );
        });
      }
    }

    return (
      <div>
        <h3>Recipe List</h3>
        <ul>
          {recipeNames}
        </ul>
      </div>
    );
  }
};

export default RecipeList;