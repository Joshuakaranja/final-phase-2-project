import React, { useState, useEffect } from 'react';

function Description() {
  const [greeting, setGreeting] = useState('Welcome');

  useEffect(() => {
    const updateGreeting = () => {
      try {
        const hour = new Date().getHours();
        if (hour < 12) {
          setGreeting('Good Morning');
        } else if (hour < 18) {
          setGreeting('Good Afternoon');
        } else {
          setGreeting('Good Evening');
        }
      } catch (error) {
        setGreeting('Welcome'); 
      }
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000); 
  return () => clearInterval(interval); 
  }, []);

  return (
    <div style={{
      
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      margin: '10px'
    }}>
      <h1 style={{
        fontSize: '2em',
        color: '#333'
      }}>{greeting}, Welcome to Your Travel Journal</h1>
      <p style={{
        fontSize: '1.2em',
        color: '#666'
      }}>Track your dream destinations, add notes, and plan your adventures!</p>
    </div>
  );
}
export default Description;