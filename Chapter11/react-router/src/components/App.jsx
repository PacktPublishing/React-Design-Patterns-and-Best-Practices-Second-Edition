import React from 'react';
import { element } from 'prop-types';
import './App.css';

const App = ({ children }) => (
  <div className="App">
    {children}
  </div>
);

App.propTypes = {
  children: element
};

export default App;
