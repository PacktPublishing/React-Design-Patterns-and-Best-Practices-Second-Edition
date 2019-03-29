import React from 'react';
import { string } from 'prop-types';

const Header = ({ title }) => (
  <header className="App-header">
    <h1>{title}</h1>
  </header>
);

Header.propTypes = {
  title: string.isRequired
};

export default Header;
