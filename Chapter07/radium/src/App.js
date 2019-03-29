import React, { Component } from 'react';
import { StyleRoot } from 'radium';
import Button from './components/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="App">
          <Button />
        </div>
      </StyleRoot>
    );
  }
}

export default App;
