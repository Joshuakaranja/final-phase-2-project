import React from 'react'
import Description from '../Description'

function About() {
  return (
    <div>
      <Description />
      <div style={styles.container}>
        <h1 style={styles.heading}>Happy Landing</h1>
        <p style={styles.subheading}>Welcome to our travel journal!</p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f5f5dc', /* beige color */
    borderRadius: '8px',
    margin: '20px 0',
  },
  heading: {
    fontSize: '2em',
    color: '#333',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '1.2em',
    color: '#666',
  },
};

export default About
