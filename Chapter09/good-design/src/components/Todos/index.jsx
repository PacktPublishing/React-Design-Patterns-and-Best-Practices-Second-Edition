import React, { Component } from 'react';
import List from './List';
import Form from './Form';

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['foo', 'bar']
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(value) {
    const items = this.state.items.slice();
    items.unshift(value);

    this.setState({
      items
    });
  }

  render() {
    return (
      <div>
        <List items={this.state.items} />
        <Form onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Todos;
