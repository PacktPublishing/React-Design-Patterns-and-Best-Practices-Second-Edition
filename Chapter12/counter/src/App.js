import React, { Component } from 'react';
import logo from './logo.svg';
import Counter from './components/Counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Counter initialCount={1} />
      </div>
    );
  }
}

export default App;
