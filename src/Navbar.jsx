import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  // Add hover effects
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      nav a[style*="color: #ecf0f1"]:hover {
        background-color: #3498db !important;
        color: white !important;
      }
      nav a[style*="color: #3498db"]:hover {
        color: #2980b9 !important;
      }
    `;
    if (!document.head.querySelector('style[data-navbar-styles]')) {
      style.setAttribute('data-navbar-styles', 'true');
      document.head.appendChild(style);
    }
  }, []);
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <Link to="/" style={styles.logoLink}>
            Travel Destinations
          </Link>
        </div>
        
        <ul style={styles.navLinks}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.navLink}>
              Home
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/about" style={styles.navLink}>
              About
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/contact" style={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

const styles = {
  navbar: {
    backgroundColor: '#2c3e50',
    padding: '1rem 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  container: {
    maxWidth: '100%',
    margin: '0 auto',
    padding: '0 3rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  logoLink: {
    color: '#3498db',
    textDecoration: 'none'
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '2rem'
  },
  navItem: {
    margin: 0
  },
  navLink: {
    color: '#ecf0f1',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease'
  }
};

export default Navbar
