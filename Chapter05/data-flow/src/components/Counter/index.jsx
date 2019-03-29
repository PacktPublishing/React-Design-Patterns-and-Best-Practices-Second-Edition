import React, { Component } from 'react';
import Display from './Display';
import Buttons from './Buttons';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  handleDecrement() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <div>
        <Display counter={this.state.counter} />
        <Buttons
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}

export default Counter;
