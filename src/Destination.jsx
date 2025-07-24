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
    console.log("Form Submitted");

    fetch("https://json-server-books-2.onrender.com/destinations",{
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(formData)
  })
  .then(r=>r.json())
  .then(data=>{
    console.log(data);
    setFormData({
      destination: "",
      description: "",
      date: "",
      budgetAmount: "",
      image: ""
    });

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

  
  

  return (
    <div style={styles.container}>
      {destination && (
        <div style={styles.selectedDestination}>
          <h2 style={styles.selectedTitle}>📍 Selected Destination</h2>
          <div style={styles.destinationCard}>
            <img
              src={destination.image || 'https://via.placeholder.com/200?text=No+Image'}
              alt={destination.destination}
              style={styles.selectedImage}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/200?text=No+Image';
              }}
            />
            <div style={styles.selectedInfo}>
              <h3 style={styles.selectedName}>{destination.destination}</h3>
              <p style={styles.selectedDescription}>{destination.description}</p>
              <div style={styles.selectedDetails}>
                <p style={styles.selectedDate}>
                  <strong>📅 Date:</strong> {formattedDate}
                </p>
                <p style={styles.selectedBudget}>
                  <strong>💰 Budget:</strong> ${destination.budgetedAmount} (
                  <span style={{ color: budgetColor, fontWeight: 'bold' }}>{budgetStatus}</span>)
                </p>
              </div>
              <button onClick={toggleFavorite} style={isFavorite ? styles.favoriteButtonActive : styles.favoriteButton}>
                {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={styles.formSection}>
        <h2 style={styles.formTitle}>✈️ Add New Destination</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="destination" style={styles.label}>🏙️ Destination:</label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleFormchange}
              placeholder="Enter destination name"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="description" style={styles.label}>📝 Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleFormchange}
              placeholder="Describe your destination..."
              style={styles.textarea}
              rows="4"
            />
          </div>

          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label htmlFor="date" style={styles.label}>📅 Travel Date:</label>
              <input 
                type="date" 
                id="date" 
                name="date" 
                value={formData.date} 
                onChange={handleFormchange}
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="budget" style={styles.label}>💰 Budget Amount:</label>
              <input
                type="number"
                id="budgetAmount"
                name="budgetAmount"
                value={formData.budgetAmount}
                onChange={handleFormchange}
                placeholder="Enter budget ($)"
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="image" style={styles.label}>🖼️ Image URL:</label>
            <input 
              type="url" 
              id="image" 
              name="image" 
              value={formData.image} 
              onChange={handleFormchange}
              placeholder="Enter image URL"
              style={styles.input}
            />
          </div>
          
          <button type="submit" style={styles.submitButton}>
            🚀 Add Destination
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  selectedDestination: {
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: '15px',
    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
  },
  selectedTitle: {
    fontSize: '1.8rem',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: '600',
  },
  destinationCard: {
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',
  },
  selectedImage: {
    width: '200px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  },
  selectedInfo: {
    flex: 1,
  },
  selectedName: {
    fontSize: '1.5rem',
    color: '#2c3e50',
    margin: '0 0 10px 0',
    fontWeight: '700',
  },
  selectedDescription: {
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  selectedDetails: {
    marginBottom: '15px',
  },
  selectedDate: {
    margin: '5px 0',
    color: '#555',
  },
  selectedBudget: {
    margin: '5px 0',
    color: '#555',
  },
  favoriteButton: {
    padding: '10px 20px',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
  },
  favoriteButtonActive: {
    padding: '10px 20px',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
  },
  formSection: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
  },
  formTitle: {
    fontSize: '2rem',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '30px',
    fontWeight: '600',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  label: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#2c3e50',
  },
  input: {
    padding: '12px 15px',
    border: '2px solid #e1e8ed',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    ':focus': {
      outline: 'none',
      borderColor: '#3498db',
      boxShadow: '0 0 0 3px rgba(52,152,219,0.1)',
    },
  },
  textarea: {
    padding: '12px 15px',
    border: '2px solid #e1e8ed',
    borderRadius: '8px',
    fontSize: '1rem',
    resize: 'vertical',
    fontFamily: 'inherit',
    transition: 'all 0.3s ease',
    ':focus': {
      outline: 'none',
      borderColor: '#3498db',
      boxShadow: '0 0 0 3px rgba(52,152,219,0.1)',
    },
  },
  submitButton: {
    padding: '15px 30px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    alignSelf: 'center',
    ':hover': {
      backgroundColor: '#2980b9',
      transform: 'translateY(-2px)',
      boxShadow: '0 5px 15px rgba(52,152,219,0.3)',
    },
  },
};

export default Destination;
