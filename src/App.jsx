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
    backgroundColor: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    minHeight: '100vh',
  },
  section: {
    minHeight: '100vh',
    padding: '100px 20px 40px 20px',
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
    background: 'linear-gradient(135deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%)',
    borderRadius: '20px',
    color: 'var(--text-on-gradient)',
    boxShadow: '0 10px 30px var(--shadow-medium)',
  },
  welcomeTitle: {
    fontSize: '3rem',
    margin: '0 0 20px 0',
    fontWeight: '700',
    textShadow: '2px 2px 4px var(--shadow-heavy)',
  },
  welcomeSubtitle: {
    fontSize: '1.3rem',
    margin: 0,
    opacity: 0.9,
    fontWeight: '300',
  },
  aboutSection: {
    background: 'linear-gradient(135deg, var(--section-about-start) 0%, var(--section-about-end) 100%)',
    minHeight: '80vh',
  },
  contactSection: {
    background: 'linear-gradient(135deg, var(--section-contact-start) 0%, var(--section-contact-end) 100%)',
    minHeight: '80vh',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '40px',
    color: 'var(--text-on-gradient)',
    fontWeight: '600',
    textShadow: '2px 2px 4px var(--shadow-heavy)',
  },
  contactInfo: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  contactText: {
    fontSize: '1.2rem',
    color: 'var(--text-on-gradient)',
    fontWeight: '300',
    textShadow: '1px 1px 2px var(--shadow-heavy)',
  },
};

export default App;
