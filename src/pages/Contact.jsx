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
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px 20px',
    minHeight: '80vh',
  },
  contactHeader: {
    textAlign: 'center',
    marginBottom: '50px',
    padding: '30px',
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '2.5em',
    color: '#2c3e50',
    marginBottom: '15px',
    borderBottom: '3px solid #9D96D4',
    paddingBottom: '15px',
    display: 'inline-block',
  },
  subtitle: {
    fontSize: '1.2em',
    color: '#666',
    lineHeight: '1.6',
    maxWidth: '600px',
    margin: '0 auto',
  },
  contactContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  infoSection: {
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    height: 'fit-content',
  },
  feedbackSection: {
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    fontSize: '1.8em',
    color: '#34495e',
    marginBottom: '25px',
    borderLeft: '4px solid #9D96D4',
    paddingLeft: '15px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 0',
    borderBottom: '1px solid #eee',
  },
  icon: {
    fontSize: '1.5em',
    marginRight: '15px',
    width: '30px',
  },
  contactText: {
    fontSize: '1.1em',
    color: '#555',
  },
};

export default Contact
