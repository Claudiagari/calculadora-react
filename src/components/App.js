import React, { Component } from 'react';
import Calculator from '../containers/Calculator';
import store from '../reducers/index';
import '../App.css';
import {Provider} from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
            <Calculator  />
     </Provider>
    );
  }
}

export default App;
