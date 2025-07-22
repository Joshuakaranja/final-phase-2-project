import React, {useEffect, useState} from 'react'

function DestinationList() {
  const [destinations, setDestinations]=useState([])
  const [editingId, setEditingId] =useState(null);
  const [formData, setFormData]= useState({
    destination:"",
    description:"",
    date:"",
    budgetAmount:"",
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
      budgetAmount:destination.budgetAmount,
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
  return (
    <div>
      <h2>Destination List</h2>
      
      {destinations.map((destination)=>{
        return (
          <div key={destination.id}>
            {editingId===destination.id?(
              <form onSubmit={handleSubmit}>
                <input type="text" name="destination" value={formData.destination} onChange={handleChange} />
                <input type="text" name="description" value={formData.description} onChange={handleChange} />
                <input type="text" name="date" value={formData.date} onChange={handleChange} />
                <input type="text" name="budgetAmount" value={formData.budgetAmount} onChange={handleChange} />
                <input type="text" name="image" value={formData.image} onChange={handleChange} />
                <button type="submit">Save Edits</button>

              </form>
            ):(
              <>
              <h3>{destination.destination}</h3>
              <p>{destination.description}</p>
              <p>{destination.date}</p>
              <p>{destination.budgetAmount}</p>
              <img src={destination.image} alt={destination.destination} style={{ width: "300px" }} />
              <button onClick={() => handleEdit(destination)}>Edit</button>

              </>
            
            )}

          </div>
        )
      })}
    </div>
  )
}

export default DestinationList