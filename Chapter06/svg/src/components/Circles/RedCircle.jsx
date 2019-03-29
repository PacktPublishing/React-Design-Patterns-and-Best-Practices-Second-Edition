import React from 'react';
import { number } from 'prop-types'
import Circle from './Circle';

const RedCircle = ({ x, y, radius }) => (
  <Circle x={x} y={y} radius={radius} fill="red" />
);

RedCircle.propTypes = {
  x: number,
  y: number,
  radius: number
}

export default RedCircle
