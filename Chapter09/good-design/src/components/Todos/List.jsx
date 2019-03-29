import React, { PureComponent } from 'react';

class List extends PureComponent {
  render() {
    return (
      <ul>
        {this.props.items.map(item => <li key={item}>{item}</li>)}
      </ul>
    );
  }
}

export default List;
