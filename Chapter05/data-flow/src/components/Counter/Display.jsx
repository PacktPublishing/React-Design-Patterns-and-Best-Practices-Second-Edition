import React from 'react';
import { number } from 'prop-types';

const Display = ({ counter }) => <h1>{counter}</h1>;

Display.propTypes = {
  counter: number
};

export default Display;
