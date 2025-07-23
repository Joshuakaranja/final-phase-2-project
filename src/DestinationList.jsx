import React, {useEffect, useState} from 'react'

function DestinationList() {
  const [destinations, setDestinations]=useState([])
  const [editingId, setEditingId] =useState(null);
  const [formData, setFormData]= useState({
    destination:"",
    description:"",
    date:"",
    budgetedAmount:"",
    image:""
  });
  useEffect(()=>{
    fetch("https://json-server-books-2.onrender.com/destinations")
    .then(r=>r.json())
    .then(data=>{
      console.log(data);
      setDestinations(data);
    });
  }, [])

  function handleEdit(destination){
    setEditingId(destination.id);
    setFormData({
      destination:destination.destination,
      description:destination.description,
      date:destination.date,
      budgetedAmount:destination.budgetedAmount,
      image:destination.image
    });
  }

  function handleChange(e){
    setFormData({
      ...formData,[e.target.name]: e.target.value
    });
  }
  function handleSubmit(e){
    e.preventDefault();
    fetch(`https://json-server-books-2.onrender.com/destinations/${editingId}`,{
      method: "PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)

    })
    .then(r=>r.json())
    .then(updatedDestination=>{
      setDestinations(destinations.map((destination)=>
        destination.id===updatedDestination.id?updatedDestination:destination));
      setEditingId(null);
    });
  
  }
  
  function handleDelete(id){
    fetch(`https://json-server-books-2.onrender.com/destinations/${id}`,{
      method: "DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(r=>{
      if (r.ok){
        setDestinations(prev=>prev.filter((destination)=>{
         return destination.id!==id
        }));
      
      }else{
        console.error("Failed to delete");
      }
    })
    

  }
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🗺️ Your Saved Destinations</h2>
      
      <div style={styles.destinationsGrid}>
        {destinations.map((destination)=>{
          return (
            <div key={destination.id} style={styles.destinationCard}>
              {editingId===destination.id?(
                <form onSubmit={handleSubmit} style={styles.editForm}>
                  <input type="text" name="destination" value={formData.destination} onChange={handleChange} style={styles.input} placeholder="Destination" />
                  <input type="text" name="description" value={formData.description} onChange={handleChange} style={styles.input} placeholder="Description" />
                  <input type="date" name="date" value={formData.date} onChange={handleChange} style={styles.input} />
                  <input type="number" name="budgetedAmount" value={formData.budgetedAmount} onChange={handleChange} style={styles.input} placeholder="Budget Amount" />
                  <input type="url" name="image" value={formData.image} onChange={handleChange} style={styles.input} placeholder="Image URL" />
                  <button type="submit" style={styles.saveButton}>💾 Save Changes</button>
                </form>
              ):(
                <div style={styles.cardContent}>
                  <div style={styles.imageContainer}>
                    <img src={destination.image} alt={destination.destination} style={styles.image} />
                  </div>
                  <div style={styles.cardInfo}>
                    <h3 style={styles.destinationName}>{destination.destination}</h3>
                    <p style={styles.description}>{destination.description}</p>
                    <div style={styles.details}>
                      <p style={styles.date}>📅 {new Date(destination.date).toLocaleDateString()}</p>
                      <p style={styles.budget}>💰 ${destination.budgetedAmount}</p>
                    </div>
                    <div style={styles.buttonGroup}>
                      <button onClick={() => handleEdit(destination)} style={styles.editButton}>✏️ Edit</button>
                      <button onClick={()=>handleDelete(destination.id)} style={styles.deleteButton}>🗑️ Delete</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>


  )
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
    fontWeight: '600',
  },
  destinationsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '25px',
    padding: '20px 0',
  },
  destinationCard: {
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  cardInfo: {
    padding: '20px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  destinationName: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#2c3e50',
    margin: '0 0 10px 0',
  },
  description: {
    color: '#666',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    margin: '0 0 15px 0',
    flex: 1,
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  date: {
    fontSize: '0.9rem',
    color: '#555',
    margin: 0,
  },
  budget: {
    fontSize: '0.9rem',
    color: '#27ae60',
    fontWeight: '600',
    margin: 0,
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
  },
  editButton: {
    flex: 1,
    padding: '10px 15px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#2980b9',
      transform: 'translateY(-2px)',
    },
  },
  deleteButton: {
    flex: 1,
    padding: '10px 15px',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#c0392b',
      transform: 'translateY(-2px)',
    },
  },
  editForm: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px',
    border: '2px solid #e1e8ed',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
    ':focus': {
      outline: 'none',
      borderColor: '#3498db',
    },
  },
  saveButton: {
    padding: '12px 20px',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#229954',
      transform: 'translateY(-2px)',
    },
  },
};

export default DestinationList
