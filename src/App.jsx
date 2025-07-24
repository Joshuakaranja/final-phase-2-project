import React from 'react'
import './App.css'
import Description from './Description'
import DestinationList from './DestinationList'
import Destination from './Destination'
import Footer from './Footer'
import Navbar from './Navbar'

function App() {
  return(
    <div style={styles.app}>
      <Navbar />
      
      {/* Home Section */}
      <section id="home" style={styles.section}>
        <div style={styles.sectionContent}>
          <div style={styles.homeHeader}>
            <h1 style={styles.welcomeTitle}>🌟 Welcome to Your Travel Journey</h1>
            <p style={styles.welcomeSubtitle}>Discover, Plan, and Track Your Dream Destinations</p>
          </div>
          <DestinationList />
          <Destination />
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{...styles.section, ...styles.aboutSection}}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>About Your Travel Journal</h2>
          <Description />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{...styles.section, ...styles.contactSection}}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>Get In Touch</h2>
          <div style={styles.contactInfo}>
            <p style={styles.contactText}>Ready to start your next adventure? Contact us!</p>
          </div>
          <Footer />
        </div>
      </section>
    </div>
  )
}

const styles = {
  app: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#ffffff',
    color: '#333333',
    minHeight: '100vh',
  },
  section: {
    minHeight: '100vh',
    padding: '100px 20px 40px 20px',
  },
  sectionContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  homeHeader: {
    textAlign: 'center',
    marginBottom: '40px',
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '20px',
    color: '#ffffff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  },
  welcomeTitle: {
    fontSize: '3rem',
    margin: '0 0 20px 0',
    fontWeight: '700',
  },
  welcomeSubtitle: {
    fontSize: '1.3rem',
    margin: 0,
    opacity: 0.9,
    fontWeight: '300',
  },
  aboutSection: {
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    minHeight: '80vh',
  },
  contactSection: {
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    minHeight: '80vh',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '40px',
    color: '#ffffff',
    fontWeight: '600',
  },
  contactInfo: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  contactText: {
    fontSize: '1.2rem',
    color: '#ffffff',
    fontWeight: '300',
  },
};

export default App;
