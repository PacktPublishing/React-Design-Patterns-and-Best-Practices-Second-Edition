import React from 'react';
import { number, string } from 'prop-types';

const Circle = ({ x, y, radius, fill }) => (
  <svg height="100" width="100">
    <circle cx={x} cy={y} r={radius} fill={fill} />
  </svg>
);

Circle.propTypes = {
  x: number,
  y: number,
  radius: number,
  fill: string
};

export default Circle;
