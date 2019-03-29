import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Transition.css';

const Transition = () => (
  <ReactCSSTransitionGroup
    transitionName="fade"
    transitionEnterTimeout={500}
    transitionLeaveTimeout={300}
  >
    <h1>Hello React</h1>
  </ReactCSSTransitionGroup>
);

export default Transition;
