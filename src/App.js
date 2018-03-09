import React, { Component } from 'react';
import Uno from './componets/Uno';
import Dos from './componets/Dos';
import Tres from './componets/Tres';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Uno/>
       <Dos/>
       <Tres/>
      </div>
    );
  }
}

export default App;
