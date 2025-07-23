import React from 'react'

function About() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>About Travel Destinations</h1>
        
        <div style={styles.section}>
          <h2 style={styles.subtitle}>Our Mission</h2>
          <p style={styles.text}>
            We help travelers discover amazing destinations around the world. Our platform 
            provides curated travel experiences, budget planning, and inspiration for your 
            next adventure.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.subtitle}>What We Offer</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>🌍 Handpicked destinations from around the globe</li>
            <li style={styles.listItem}>💰 Budget planning and cost estimates</li>
            <li style={styles.listItem}>📸 Beautiful photography and detailed descriptions</li>
            <li style={styles.listItem}>🗓️ Travel date recommendations</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.subtitle}>Why Choose Us</h2>
          <p style={styles.text}>
            With years of travel experience and a passion for exploration, we bring you 
            carefully selected destinations that offer unique experiences. Whether you're 
            looking for adventure, relaxation, or cultural immersion, we have something 
            for every type of traveler.
          </p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '70vh',
    padding: '2rem 0',
    backgroundColor: '#f8f9fa'
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 1rem'
  },
  title: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '2rem',
    fontWeight: 'bold'
  },
  section: {
    marginBottom: '2rem',
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#3498db',
    marginBottom: '1rem',
    fontWeight: '600'
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#555',
    margin: 0
  },
  list: {
    padding: 0,
    margin: 0
  },
  listItem: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#555',
    listStyle: 'none',
    padding: '0.5rem 0'
  }
};

export default About
