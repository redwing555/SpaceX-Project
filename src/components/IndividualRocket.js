import React from 'react';
import PropTypes from 'prop-types';
import '../styles/individualRocket.css';

/* eslint-disable  */
const Rocket = ({ image, description, name }) => {
  return (
    <li>
        <div>
      
      <img src={image} alt="img-rocket" width="250" height="160"/>
      </div>
      <div>
      <h3>{name}</h3>
      <p>{description}</p>
      </div>
      
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
