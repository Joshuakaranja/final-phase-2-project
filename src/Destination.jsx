import React from 'react';

function Destination({ destination }) {
  return (
    <div>
      <h2>{destination.destination}</h2>
      <p>{destination.description}</p>
      <img
        src={destination.image || 'https://via.placeholder.com/200?text=No+Image'}
        alt={destination.destination}
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/200?text=No+Image';
        }}
      />
    </div>
  );
}

export default Destination;