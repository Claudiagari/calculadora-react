import React, { Component } from 'react';
import Calculator from '../containers/Calculator';
import store from '../reducers/index';
import '../App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator store={store} />
      </div>
    );
  }
}

export default App;
