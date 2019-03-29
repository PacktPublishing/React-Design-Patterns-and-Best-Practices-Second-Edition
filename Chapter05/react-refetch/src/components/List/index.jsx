import React from 'react';
import { object } from 'prop-types';
import { connect } from 'react-refetch';
import Gist from './Gist';

const List = ({ gists }) => (
  gists.fulfilled && (
    <ul>
      {gists.value.map(gist => (
        <Gist key={gist.id} {...gist} />
      ))}
    </ul>
  )
);

List.propTypes = {
  gists: object
};

const connectWithGists = connect(({ username }) => ({
  gists: `https://api.github.com/users/${username}/gists`,
}));

export default connectWithGists(List);
