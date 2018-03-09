import React, { Component } from 'react';
import Uno from './componets/Uno';
import store from './store/todo'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Uno store={store}/>
     
      </div>
    );
  }
}

export default App;
