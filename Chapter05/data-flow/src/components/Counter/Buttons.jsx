import React from 'react';
import { func } from 'prop-types';

const Buttons = ({ onDecrement, onIncrement }) => (
  <div>
    <button onClick={onDecrement}>-</button>
    <button onClick={onIncrement}>+</button>
  </div>
);

Buttons.propTypes = {
  onDecrement: func,
  onIncrement: func
};

export default Buttons;
