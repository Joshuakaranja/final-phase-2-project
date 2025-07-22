import React, {useState , useEffect} from 'react';

function Description() {
  const [greeting, setGreeting] = useState('Welcome');

  useEffect(() => {
    const updateGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good Morning');
    } else if (hour < 18) {
       setGreeting('Good Afternoon');
    } else {
       setGreeting('Good Evening');
  } 
 };

    updateGreeting(); 
  }, []);


  return (
    <div className='description'>
      <h1>Welcome to Your Travel Journal</h1>
      <p>Track your dream destinations, add notes, and plan your adventures!</p>
    </div>
  );
}

export default Description