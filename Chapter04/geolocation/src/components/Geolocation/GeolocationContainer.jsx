import React, { Component } from 'react';
import Geolocation from './Geolocation';

class GeolocationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null
    };

    this.handleSuccess = this.handleSuccess.bind(this);
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleSuccess);
    }
  }

  handleSuccess({ coords: { latitude, longitude } }) {
    this.setState({
      latitude,
      longitude
    });
  }

  render() {
    return <Geolocation {...this.state} />;
  }
}

export default GeolocationContainer;
