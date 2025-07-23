// components/Footer.js
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.copyright}>
          © {currentYear} Travel Destinations App. All rights reserved.
        </p>
        <p style={styles.credit}>
          Built with by{" "}
          <a href="https://github.com/Joshuakaranja" style={styles.link} target="_blank" rel="noopener noreferrer">
            We travel Group
          </a>
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#f5f5f5",
    color: "#555",
    padding: "1.5rem 0",
    marginTop: "2rem",
    borderTop: "1px solid #ddd",
    textAlign: "center",
    width: "100%",
  },
  container: {
    maxWidth: '100%',
    margin: '0 auto',
    padding: '0 2rem',
  },
  copyright: {
    fontSize: "0.9rem",
    color: "#666"
  },
  credit: {
    fontSize: "0.9rem",
    margin: "0",
    color: "black"
  },
  link: {
    color: "#007acc",
    textDecoration: "none"
  }
};

export default Footer;
