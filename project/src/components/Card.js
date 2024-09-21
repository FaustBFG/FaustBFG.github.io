// components/Card.js
import React from 'react';
import '../css/Card.css';

const Card = ({ title, image, distance }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3>{title}</h3>
      {distance && <p className="card-distance">{distance}</p>}
    </div>
  );
};

export default Card;
