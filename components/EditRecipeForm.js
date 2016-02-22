import React, {Component} from 'react';

class EditRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      ingredients: ''
    };

    this.changeTitle = this.changeTitle.bind(this);
    this.changeIngredients = this.changeIngredients.bind(this);
  }

  componentDidMount() {
    this.setState({
      title: this.props.data.title,
      ingredients: this.props.data.ingredients.join(',')
    });
  }

  handleEditRecipe(e){
    e.preventDefault();

    let ingredients = this.state.ingredients.trim();
    let ingredientsArray = ingredients.split(',');
    ingredientsArray.map(function(a) {
      return a.trim();
    });


    let recipeObject = {
      title: this.state.title,
      ingredients: ingredientsArray
    };

    console.log('recipeObject:', recipeObject);
    debugger;

    this.props._handleEditRecipe(this.props.index, recipeObject);

    this.props.onClose.bind(this);
  }

  changeTitle(e) {
    this.setState({title: e.target.value});
  }

  changeIngredients(e) {
    this.setState({ingredients: e.target.value});
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
              <h4 className="modal-title">Edit Recipe</h4>
            </div>

            <div className="modal-body">

              <form 
                className="form-horizontal"
                role="form"
                onSubmit={this.handleEditRecipe.bind(this)}>
                <div className="form-group">
                  <label  className="col-sm-2 control-label" 
                  htmlFor="title">Title</label>
                  <div className="col-sm-10">
                    <input 
                      type="text" 
                      className="form-control" 
                      id="title"
                      value={this.state.title}
                      onChange={this.changeTitle}
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
                      type="textarea"
                      className="form-control" 
                      id="Ingredients"
                      value={this.state.ingredients}
                      onChange={this.changeIngredients}
                      placeholder="Ingredients. Separate them by comma."/>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button
                      type="submit"
                      className="btn btn-success">Finish Edit</button>
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

export default EditRecipeForm;


