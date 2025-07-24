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
    background: 'var(--toggle-bg)',
    border: '2px solid var(--toggle-border)',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px var(--toggle-shadow)',
    position: 'relative',
    overflow: 'hidden',
  },
  icon: {
    fontSize: '1.5rem',
    transition: 'transform 0.3s ease',
    zIndex: 1,
  }
};

export default ThemeToggle;
