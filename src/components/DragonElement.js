import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/rocketElement.css';

import Dragon from './IndividualDragon';

const DragonElement = () => {
  const dragons = useSelector((state) => state.dragonsReducer.dragons);

  return (
    <div>
      <ul>
        {dragons
                 && dragons.map((dragon) => (
                   <Dragon key={dragon.id} dragon={dragon} />
                 ))}
      </ul>
    </div>
  );
};

export default DragonElement;
