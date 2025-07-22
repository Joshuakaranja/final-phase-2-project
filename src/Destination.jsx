import React from 'react';

function Destination({ destination }) {
  return (
    <div>
      <h2>{destination.destination}</h2>
      <p>{destination.description}</p>
    </div>
  );
}

export default Destination;