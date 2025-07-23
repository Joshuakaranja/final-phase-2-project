import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.contactSection}>
          <p style={styles.copyright}>
            © {currentYear} Travel Destinations. All rights reserved.
          </p>
          <p style={styles.contact}>
            Contact us: @254-712345667
          </p>
        </div>
        
        <div style={styles.socialIcons}>
          <a href="https://instagram.com" style={styles.icon} aria-label="Instagram">
            📷 Instagram
          </a>
          <a href="https://facebook.com" style={styles.icon} aria-label="Facebook">
            📘 Facebook
          </a>
          <a href="https://twitter.com" style={styles.icon} aria-label="Twitter">
            🐦 Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#E4C1F9",
    color: "black",
    padding: "1.5rem",
    borderRadius: "8px",
    margin: "20px",
    width: "95vw",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif"
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
    maxWidth: "1200px",
    margin: "0 auto"
  },
  contactSection: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem"
  },
  copyright: {
    fontSize: "0.9rem",
    margin: 0,
    fontWeight: "500"
  },
  contact: {
    fontSize: "0.9rem",
    margin: 0,
    fontWeight: "500"
  },
  socialIcons: {
    display: "flex",
    gap: "1.5rem",
    alignItems: "center"
  },
  icon: {
    color: "black",
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "scale(1.1)",
      color: "#6a3093"
    }
  }
};

export default Footer;