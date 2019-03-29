import React, { Component } from 'react';
import logo from './logo.svg';
import List from './components/Counter/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <List />
      </div>
    );
  }
}

export default App;
