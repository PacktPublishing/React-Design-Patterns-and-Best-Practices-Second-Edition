import React from 'react';
import { array } from 'prop-types';
import withData from './WithData';

const List = ({ data: gists }) => (
  <ul>
    {gists.map(gist => (
      <li key={gist.id}>{gist.description}</li>
    ))}
  </ul>
);

List.propTypes = {
  data: array
};

const withGists = withData(() => `https://api.github.com/users/gaearon/gists`);

export default withGists(List);
