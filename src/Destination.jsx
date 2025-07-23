import React, { useState } from 'react';

function Destination({ destination }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [formData, setFormData]=useState({
    destination:"",
    description:"",
    date:"",
    budgetAmount:"",
    image:""
  });
  function handleFormchange(e){
    const{name, value}=e.target;
    setFormData({
      ...formData,[name]:value,
    });
  }
  function handleSubmit(e){
    e.preventDefault();

    fetch("https://json-server-books-2.onrender.com/destinations",{
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify()
  })
  .then(r=>r.json())
  .then(data=>{

  })
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const formattedDate = destination?.date
    ? new Date(destination.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  const budgetStatus =
    destination?.budgetedAmount > 2000 ? 'Over Budget' : 'Within Budget';
  const budgetColor = destination?.budgetedAmount > 2000 ? 'red' : 'green';

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submit logic here
  };

  

  return (
    <div>
      {destination ? (
        <>
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
        </>
      ) : (
        <div>Enter a destination to view details.</div>
      )}

      {/* Show the form regardless */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="destination">Destination:</label>
        <input
          type="text"
          id="destination"
          name="destination"
          placeholder="Enter destination"
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter description"
        />

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" />

        <label htmlFor="budget">Budget Amount:</label>
        <input
          type="number"
          id="budget"
          name="budget"
          placeholder="Enter budget"
        />

        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" name="image" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Destination;
