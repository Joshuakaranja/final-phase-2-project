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
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
  },
  aboutContent: {
    marginTop: '30px',
    padding: '30px',
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '2.5em',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '30px',
    borderBottom: '3px solid #9D96D4',
    paddingBottom: '15px',
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  section: {
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  },
  subheading: {
    fontSize: '1.5em',
    color: '#34495e',
    marginBottom: '15px',
    borderLeft: '4px solid #9D96D4',
    paddingLeft: '15px',
  },
  text: {
    fontSize: '1.1em',
    lineHeight: '1.6',
    color: '#555',
    textAlign: 'justify',
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  featureItem: {
    fontSize: '1.1em',
    padding: '10px 0',
    color: '#555',
    borderBottom: '1px solid #eee',
  },
};

export default About
