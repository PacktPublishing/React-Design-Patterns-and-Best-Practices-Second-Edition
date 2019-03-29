import React, { Component } from 'react';

class ShowInformation extends Component {
  state = {
    name: '',
    age: 0,
    show: false
  };

  handleOnChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  }

  handleShowInformation = () => {
    this.setState({
      show: true
    });
  }

  render() {
    if (this.state.show) {
      return (
        <div className="ShowInformation">
          <h1>Personal Information</h1>

          <div className="personalInformation">
            <p><strong>Name:</strong> {this.state.name}</p>
            <p><strong>Age:</strong> {this.state.age}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="ShowInformation">
        <h1>Personal Information</h1>

        <p><strong>Name:</strong></p>

        <p>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleOnChange}
          />
        </p>

        <p>
          <input
            name="age"
            type="number"
            value={this.state.age}
            onChange={this.handleOnChange}
          />
        </p>

        <p>
          <button onClick={this.handleShowInformation}>
            Show Information
          </button>
        </p>
      </div>
    );
  }
}

export default ShowInformation;
