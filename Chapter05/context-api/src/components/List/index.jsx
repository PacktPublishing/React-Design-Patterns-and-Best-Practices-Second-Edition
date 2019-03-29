  // Dependencies
  import React from 'react';
  import { array } from 'prop-types';

  // Providers
  import { ListProvider, ListContext } from './ListContext';

  const List = () => (
    <ListProvider>
      <ListContext.Consumer>
        {/* These props are comming from the Provider's value*/}
        {({ gists, myLogAction }) => (
          <ul>
            {myLogAction()}
            {gists.map(gist => (
              <li key={gist.id}>{gist.description}</li>
            ))}
          </ul>
        )}
      </ListContext.Consumer>
    </ListProvider>
  );

  List.propTypes = {
    data: array
  };

  export default List;
