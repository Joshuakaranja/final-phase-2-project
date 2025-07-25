import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .nav-link:hover {
        background-color: rgba(255,255,255,0.25) !important;
        color: white !important;
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      .navbar-container {
        max-width: 1200px;
        margin: 0 auto;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const location = useLocation();

  return (
    <nav className="navbar" style={styles.navbar}>
      <div className="navbar-container" style={styles.container}>
        <div style={styles.logo}>
          <Link to="/" style={styles.logoLink}>
            Travel Destinations
          </Link>
        </div>
        <div style={styles.navRight}>
          <ul style={styles.navLinks}>
            <li style={styles.navItem}>
              <Link to="/" className="nav-link" style={{
                ...styles.navLink,
                backgroundColor: location.pathname === '/' ? 'rgba(255,255,255,0.2)' : 'transparent'
              }}>
                Home
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/about" className="nav-link" style={{
                ...styles.navLink,
                backgroundColor: location.pathname === '/about' ? 'rgba(255,255,255,0.2)' : 'transparent'
              }}>
                About
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/contact" className="nav-link" style={{
                ...styles.navLink,
                backgroundColor: location.pathname === '/contact' ? 'rgba(255,255,255,0.2)' : 'transparent'
              }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    padding: '1rem 0',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    width: 'calc(100% - 2rem)',
    margin: '0 1rem',
    position: 'sticky',
    top: '1rem',
    zIndex: 1000,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
  },
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.6rem',
    fontWeight: '700',
  },
  logoLink: {
    color: '#FFFFFF',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    fontWeight: '700',
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0,
  },
  navItem: {
    display: 'inline-block',
  },
  navLink: {
    textDecoration: 'none',
    color: '#ffffff',
    padding: '0.7rem 1.4rem',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    display: 'inline-block',
    fontWeight: '500',
    fontSize: '0.95rem',
  },
};

export default Navbar;