import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/rocketElement.css';

import Rocket from './IndividualRocket';

const RocketElement = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  return (
    <div>
      <ul>
        {rockets
                   && rockets.map((rocket) => (
                     <Rocket key={rocket.id} rocket={rocket} />
                   ))}
      </ul>
    </div>
  );
};

export default RocketElement;
