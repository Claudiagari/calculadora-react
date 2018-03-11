import React, { Component } from 'react';
import Calculator from './Calculator';
import store from './store/';
import './App.css';

// class Console extends Component{
//   render() {
//     return(
//       <div className="console-style col-md-6 d-flex ">
//       </div>
//     );
//   }
// }

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
