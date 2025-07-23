import React from 'react'

function Contact() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.text}>
          We're here to help you with your travel plans. Reach out to us via the following methods:
        </p>

        <div style={styles.contactDetails}>
          <p style={styles.detail}><strong>Email:</strong> contact@traveldestinations.com</p>
          <p style={styles.detail}><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p style={styles.detail}><strong>Address:</strong> 123 Travel Road, Adventure City, World</p>
        </div>

        <p style={styles.message}>Feel free to ask us about our destinations, budget planning, or any other inquiries you may have.</p>
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
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#555'
  },
  contactDetails: {
    margin: '2rem 0',
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  detail: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#555',
    margin: '0.5rem 0'
  },
  message: {
    fontSize: '1rem',
    color: '#777',
    textAlign: 'center',
    marginTop: '2rem'
  }
}

export default Contact

