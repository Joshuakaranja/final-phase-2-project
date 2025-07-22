import React, { useState } from 'react';

function Destination({ destination }) {
  if (!destination) {
    return <div>Please select a destination to view details.</div>;
  }

  const [isFavorite, setIsFavorite] = useState(false);

  const formattedDate = new Date(destination.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const budgetStatus = destination.budgetedAmount > 2000 ? 'Over Budget' : 'Within Budget';
  const budgetColor = destination.budgetedAmount > 2000 ? 'red' : 'green';

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

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
      <p>
        <strong>Budget:</strong> ${destination.budgetedAmount} (
        <span style={{ color: budgetColor }}>{budgetStatus}</span>)
      </p>
      <button onClick={toggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
}

export default Destination;