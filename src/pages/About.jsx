import React from 'react'
import Description from '../components/Description'

function About() {
  return (
    <div style={styles.aboutContainer}>
      <Description />
      
      <div style={styles.aboutContent}>
        <h2 style={styles.heading}>About Our Travel Journal</h2>
        <div style={styles.contentGrid}>
          <div style={styles.section}>
            <h3 style={styles.subheading}>Our Mission</h3>
            <p style={styles.text}>
              We believe that travel is one of life's greatest adventures. Our platform helps you 
              organize, plan, and cherish your travel experiences by creating a personalized 
              digital journal of your destinations.
            </p>
          </div>
          
          <div style={styles.section}>
            <h3 style={styles.subheading}>Features</h3>
            <ul style={styles.featureList}>
              <li style={styles.featureItem}>📍 Track your dream destinations</li>
              <li style={styles.featureItem}>📝 Add personal notes and memories</li>
              <li style={styles.featureItem}>🗓️ Plan your future adventures</li>
              <li style={styles.featureItem}>📷 Store your travel experiences</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  aboutContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  aboutContent: {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  heading: {
    fontSize: '2em',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  },
  contentGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  section: {
    padding: '15px',
    backgroundColor: 'white',
    borderRadius: '5px',
  },
  subheading: {
    fontSize: '1.3em',
    color: '#444',
    marginBottom: '10px',
  },
  text: {
    fontSize: '1em',
    lineHeight: '1.5',
    color: '#666',
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  featureItem: {
    fontSize: '1em',
    padding: '5px 0',
    color: '#666',
  },
};

export default About
