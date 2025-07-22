import React from 'react';

function Destination({ destination }) {
  const formattedDate = new Date(destination.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

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
      <p>
        <strong>Date:</strong> {formattedDate}
      </p>
    </div>
  );
}

export default Destination;