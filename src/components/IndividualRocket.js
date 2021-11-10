import React from 'react';
import '../styles/individualRocket.css';

const Rocket = (prop) => {
  const { rocket } = prop;
  const {
    name,
    flickr_images: flickrImages,
    description,
  } = rocket;

  return (
    <li>
      <div>

        <img src={flickrImages} alt="img-rocket" width="250" height="160" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>

    </li>
  );
};

export default Rocket;

Rocket.defaultProps = {
  reserved: false,
};
