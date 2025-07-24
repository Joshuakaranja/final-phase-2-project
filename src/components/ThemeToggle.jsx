import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={styles.toggleButton}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} theme`}
    >
      <span style={styles.icon}>
        {isDarkMode ? '☀️' : '🌙'}
      </span>
    </button>
  );
};

const styles = {
  toggleButton: {
    background: 'white',
    border: '2px solid #e0e0e0',
    borderRadius: '50%',
    width: '45px',
    height: '45px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  icon: {
    fontSize: '1.5rem',
    transition: 'transform 0.3s ease',
  }
};

export default ThemeToggle;
