import React from 'react';
import { node } from 'prop-types';

const Content = ({ children }) => (
  <div className="Content">
    {children}
  </div>
);

Content.propTypes = {
  children: node.isRequired
};

export default Content;
