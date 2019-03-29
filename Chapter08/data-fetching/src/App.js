import React from 'react';
import { array } from 'prop-types';

const App = ({ gists }) => (
  <ul>
    {gists.map(gist => (
      <li key={gist.id}>{gist.description}</li>
    ))}
  </ul>
);

App.propTypes = {
  gists: array
};

export default App;
