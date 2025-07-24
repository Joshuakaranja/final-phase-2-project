import React from 'react'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div style={styles.contactContainer}>
      <div style={styles.contactHeader}>
        <h2 style={styles.heading}>Get In Touch</h2>
        <p style={styles.subtitle}>
          We'd love to hear about your travel experiences and how we can improve our services !
        </p>
      </div>
      
      <div style={styles.contactContent}>
        <div style={styles.infoSection}>
          <h3 style={styles.sectionTitle}>Contact Information</h3>
          <div style={styles.contactItem}>
            <span style={styles.icon}>📧</span>
            <span style={styles.contactText}>wetravel2@gmail.com</span>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.icon}>🌍</span>
            <span style={styles.contactText}>+254 71234567</span>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.icon}>⏰</span>
            <span style={styles.contactText}>Response time: Within 24 hours</span>
          </div>
        </div>
        
        <div style={styles.feedbackSection}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

const styles = {
  contactContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  contactHeader: {
    textAlign: 'center',
    marginBottom: '30px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  heading: {
    fontSize: '2em',
    color: '#333',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1em',
    color: '#666',
    lineHeight: '1.5',
  },
  contactContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  infoSection: {
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
  },
  feedbackSection: {
    padding: '15px',
    backgroundColor: 'white',
    borderRadius: '8px',
  },
  sectionTitle: {
    fontSize: '1.5em',
    color: '#444',
    marginBottom: '15px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 0',
  },
  icon: {
    fontSize: '1.2em',
    marginRight: '10px',
    width: '25px',
  },
  contactText: {
    fontSize: '1em',
    color: '#666',
  },
};

export default Contact
