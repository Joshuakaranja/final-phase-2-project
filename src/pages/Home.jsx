import React, { useState } from 'react'
import DestinationList from '../components/DestinationList'
import Description from '../components/Description'
import Destination from '../components/Destination'

function Home() {
  const [showAddForm, setShowAddForm] = useState(false)

  return (
    <div>
      <Description />
      <DestinationList />
      
      {/* Add New Destination Section */}
      <div style={styles.addDestinationSection}>
        <button 
          onClick={() => setShowAddForm(!showAddForm)} 
          style={styles.toggleButton}
        >
          {showAddForm ? '❌ Cancel' : '➕ Add New Destination'}
        </button>
        
        {showAddForm && (
          <div style={styles.formContainer}>
            <Destination />
          </div>
        )}
      </div>
    </div>
  )
}

const styles = {
  addDestinationSection: {
    maxWidth: '1200px',
    margin: '40px auto',
    padding: '0 20px',
    textAlign: 'center',
  },
  toggleButton: {
    padding: '15px 30px',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    marginBottom: '20px',
  },
  formContainer: {
    marginTop: '20px',
  },
}

export default Home
