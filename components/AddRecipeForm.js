import React, {Component} from 'react';

class AddRecipeForm extends Component {
  handleAddRecipe(e){
    e.preventDefault();

    let title = this.refs.title.value.trim();
    let ingredients = this.refs.ingredients.value.trim();
    let ingredientsArray = ingredients.split(',');
    ingredientsArray.map(function(a) {
      return a.trim();
    });

    let recipeObject = {
      title: title,
      ingredients: ingredientsArray
    };

    this.props._handleAddRecipe(recipeObject);

    this.refs.title.value = "";
    this.refs.ingredients.value = ""
    this.props.onClose.bind(this);
  }

  render() {
    const { show } = this.props;
    const styles = {
      modal: {
        display: (show) ? (show) : 'none',
        zIndex: 100000
      }
    };
    
    return (

      <div className="modal-wrapper" style={styles.modal}>
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <button onClick={this.props.onClose} type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Add Recipe</h4>
            </div>

            <div className="modal-body">

              <form className="form-horizontal" role="form"
              onSubmit={this.handleAddRecipe.bind(this)}>
                <div className="form-group">
                  <label  className="col-sm-2 control-label" 
                  htmlFor="title">Title</label>
                  <div className="col-sm-10">
                    <input 
                      ref="title"
                      type="text" 
                      className="form-control" 
                      id="title"
                      placeholder="Title"/>
                  </div>
                </div>

                <div className="form-group">
                  <label 
                    className="col-sm-2 control-label"
                    htmlFor="Ingredients">
                  Ingredients</label>
                  <div className="col-sm-10">
                    <input 
                      ref="ingredients"
                      type="textarea"
                      className="form-control" 
                      id="Ingredients"
                      placeholder="Ingredients. Separate them by comma."/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button
                      onClick={this.props.onClose}
                      type="submit"
                      className="btn btn-success">Add Recipe</button>
                  </div>
                </div>
              </form>

            </div>

          </div>
        </div>
      </div>
    );
  }
};

export default AddRecipeForm;


