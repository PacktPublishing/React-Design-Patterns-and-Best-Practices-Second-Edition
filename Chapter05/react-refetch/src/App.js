import React, { Component } from 'react';
import List from './components/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <List username="gaearon" />
      </div>
    );
  }
}

export default App;
