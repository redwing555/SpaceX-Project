import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable  */
const Rocket = ({ image, description, name }) => {
  return (
    <li>
        <div>
      <h1>{name}</h1>
      <img src={image} alt="img-rocket" width="250" height="160"/>
      </div>
      <p>{description}</p>
      
    </li>
  );
};

export default Rocket;


Rocket.PropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
/* eslint-enable  */
