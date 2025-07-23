import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .nav-link:hover {
        background-color: beige !important;
        color: black !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <Link to="/" style={styles.logoLink}>Travel Destinations</Link>
        </div>
        <ul style={styles.navLinks}>
          <li style={styles.navItem}>
            <Link to="/" className="nav-link" style={styles.navLink}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/about" className="nav-link" style={styles.navLink}>About</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/contact" className="nav-link" style={styles.navLink}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#9D96D4',
    padding: '1rem ',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    width: '94vw', 
    position: 'fixed', // Makes navbar stick to top
    top: '8px',
    left: '20px',
    zIndex: 1000,
    borderRadius:'20px'
  },
  container: {
    width: '100%', // Ensures container takes full width
    margin: 'auto',
    padding: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  logoLink: {
    color: '#40434E',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    '&:hover': {
      opacity: 0.8,
    }
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  navItem: {
    display: 'inline-block',
  },
  navLink: {
    textDecoration: 'none',
    color: '#ecf0f1',
    padding: '0.6rem 1.2rem',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
    display: 'inline-block',
  },
};

export default Navbar;