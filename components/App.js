import React, {Component} from 'react';
import {render} from 'react-dom';

require('../public/main.scss');

class App extends Component{
  constructor() {
    super();
  }

  render(){
    return (
      <div className="container">
        <h1>Hello</h1>
      </div>
    )
  }
};

render(<App/>, document.getElementById('main'));