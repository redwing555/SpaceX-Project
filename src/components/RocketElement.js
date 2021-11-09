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
                   <Rocket
                     id={rocket.id}
                     key={rocket.id}
                     name={rocket.name}
                     description={rocket.description}
                     image={rocket.flickr_images[0]}

                   />
                 ))}
      </ul>
    </div>
  );
};

export default RocketElement;
