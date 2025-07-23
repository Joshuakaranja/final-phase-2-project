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
  },
  section: {
    minHeight: '100vh',
    padding: '100px 20px 40px 20px', // Top padding for fixed navbar
    transition: 'all 0.3s ease',
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
    color: 'white',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  },
  welcomeTitle: {
    fontSize: '3rem',
    margin: '0 0 20px 0',
    fontWeight: '700',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
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
    color: 'white',
    fontWeight: '600',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  },
  contactInfo: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  contactText: {
    fontSize: '1.2rem',
    color: 'white',
    fontWeight: '300',
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
  },
};

export default App;
