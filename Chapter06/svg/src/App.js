import React, { Component } from 'react';
import Circle from './components/Circles/Circle';
import RedCircle from './components/Circles/RedCircle';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Circle x={40} y={40} radius={40} fill="blue" />
        <RedCircle x={40} y={40} radius={40} />
      </div>
    );
  }
}

export default App;
