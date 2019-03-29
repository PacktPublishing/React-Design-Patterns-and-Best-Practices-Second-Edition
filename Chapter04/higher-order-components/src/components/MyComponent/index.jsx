import React from 'react';
import { number } from 'prop-types';

import withInnerWidth from './WithInnerWidth';

const MyComponent = ({ innerWidth }) => <div>innerWidth: {innerWidth}</div>;

MyComponent.propTypes = {
  innerWidth: number
};

export default withInnerWidth(MyComponent);
