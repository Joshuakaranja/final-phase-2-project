import React, { useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';

function Navbar() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .nav-link:hover {
        background-color: rgba(255,255,255,0.2) !important;
        color: white !important;
        transform: translateY(-2px);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="navbar" style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} style={styles.logoLink}>
            🌍 Travel Destinations
          </a>
        </div>
        <div style={styles.navRight}>
          <ul style={styles.navLinks}>
            <li style={styles.navItem}>
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="nav-link" style={styles.navLink}>
                Home
              </a>
            </li>
            <li style={styles.navItem}>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="nav-link" style={styles.navLink}>
                About
              </a>
            </li>
            <li style={styles.navItem}>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="nav-link" style={styles.navLink}>
                Contact
              </a>
            </li>
          </ul>
          <div className="theme-toggle">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    padding: '1rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    width: '94vw', 
    position: 'fixed',
    top: '8px',
    left: '20px',
    zIndex: 1000,
    borderRadius: '20px'
  },
  container: {
    width: '100%',
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
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
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