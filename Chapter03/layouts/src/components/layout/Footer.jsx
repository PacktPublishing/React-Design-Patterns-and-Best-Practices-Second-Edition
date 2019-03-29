import React from 'react';
import { string } from 'prop-types';

const Footer = ({ copyright }) => (
  <div className="Footer">
    <p>&copy; {copyright}</p>
  </div>
);

Footer.propTypes = {
  copyright: string.isRequired
};

export default Footer;
