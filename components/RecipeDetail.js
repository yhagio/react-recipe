import React, {Component} from 'react';

class RecipeDetail extends Component {
  constructor(props) {
    super(props);
  }

  deleteRecipe() {
    this.props._deleteRecipe(this.props.id);
  }

  editRecipe() {
    this.props._editRecipe(this.props.id);
  }

  render() {
    return (
      <div className="panel panel-default" key={`recipe-${this.props.id}`}>
        
        <div className="panel-heading">
          <h4 className="panel-title">
            <a
              data-toggle="collapse"
              data-parent="#accordion"
              href={`#recipe-${this.props.id}`}>{this.props.item.title}</a>
          </h4>
        </div>

        <div id={`recipe-${this.props.id}`} className="panel-collapse collapse in">
          <div className="panel-body">
            <ul className="list-group">
              {this.props.item.ingredients.map((item, i) => {
                return <li key={`item-${this.props.id}-${i}`} className="list-group-item">{item}</li>
              })}
            </ul>
            <div className="form-group">
              <div className="col-sm-10">
                <button
                  type="submit"
                  onClick={this.deleteRecipe.bind(this)}
                  className="btn btn-danger delete-btn">DELETE</button>
                <button
                  type="submit"
                  onClick={this.editRecipe.bind(this)}
                  className="btn btn-primary">EDIT</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
};

export default RecipeDetail;