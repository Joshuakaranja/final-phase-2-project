import React, {useEffect, useState} from 'react'

function DestinationList() {
  const [destinations, setDestinations]=useState([])
  useEffect(()=>{
    fetch("https://json-server-books-2.onrender.com/destinations")
    .then(r=>r.json())
    .then(data=>{
      console.log(data);
      setDestinations(data);
    });
  }, [])
  return (
    <div>
      <h2>Destination List</h2>
      {destinations.map((destination)=>{
        return(
        <div key={destination.id}>
          <h3>{destination.destination}</h3>
          <p>{destination.description}</p>
          <p>{destination.date}</p>
          <p>{destination.budgetAmount}</p>
          <img src={destination.image} alt={destination.destination} style={{width:"300px"}} />
        </div>
        )
      })}
    </div>
  )
}

export default DestinationList