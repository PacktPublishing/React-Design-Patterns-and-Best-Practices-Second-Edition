import React from 'react';
import { number } from 'prop-types';

const Geolocation = ({ latitude, longitude }) => (
  <div>
    <div>Latitude: {latitude}</div>
    <div>Longitude: {longitude}</div>
  </div>
);

Geolocation.propTypes = {
  latitude: number,
  longitude: number
};

export default Geolocation;
