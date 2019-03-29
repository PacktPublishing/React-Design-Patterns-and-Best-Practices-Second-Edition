import React from 'react';

const HelloWorld = props => (
  <h1 className="Hello">Hello {props.name || 'World'}</h1>
);

export default HelloWorld;
