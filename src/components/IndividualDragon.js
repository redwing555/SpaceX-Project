import React from 'react';
import '../styles/individualRocket.css';
import { Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { cancelTicketDragon, reserveTicketDragon } from '../redux/dragons/dragons';

const Dragon = (prop) => {
  const { dragon } = prop;
  const {
    id,
    name,
    flickr_images: flickrImages,
    description,
    reserved,
  } = dragon;
  const dispatch = useDispatch();

  const handleReservation = () => {
    dispatch(reserveTicketDragon(id));
  };
  const handleCancelReserv = () => {
    dispatch(cancelTicketDragon(id));
  };
  return (
    <li className="rocket">
      <div>
        <img className="image" src={flickrImages} alt="img-rocket" width="250" height="160" />
      </div>
      <div>
        <div className="badge-name">
          <h3 className="name">{name}</h3>
          {reserved && (
          <div><Badge className="badge bg-info">Reserved</Badge></div>
          )}

        </div>
        <p>{description}</p>
        {!reserved && (
        <Button type="button" className="btn btn-primary mt-1" onClick={handleReservation}>Reserve Dragon</Button>
        )}
        {reserved && (
        <Button type="button" className="btn btn-light btn-outline-danger" onClick={handleCancelReserv}>Cancel Reservation</Button>
        )}
      </div>
    </li>
  );
};

export default Dragon;

Dragon.defaultProps = {
  reserved: false,
};