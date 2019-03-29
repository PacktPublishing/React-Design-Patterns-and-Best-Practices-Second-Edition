import React, { Component } from 'react';
import logo from './logo.svg';

import Hooks from './components/Hooks';
import Form from './components/Hooks/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Hooks />
        <Form />
      </>
    );
  }
}

export default App;
