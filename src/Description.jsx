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
    <div className="description">
      <h1>{greeting}, Welcome to Your Travel Journal</h1>
      <p>Track your dream destinations, add notes, and plan your adventures!</p>
    </div>
  );
}

export default Description;