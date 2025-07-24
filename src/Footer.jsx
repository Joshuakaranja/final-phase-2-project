import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="card footer" style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.contentWrapper}>
          <div style={styles.contactSection}>
            <h3 style={styles.footerTitle}>Travel Destinations</h3>
            <p className="text-primary" style={styles.copyright}>
              © {currentYear} Travel Destinations. All rights reserved.
            </p>
            <p className="text-secondary" style={styles.contact}>
              📞 Contact us: +254-712345667
            </p>
            <p className="text-secondary" style={styles.contact}>
              ✉️ Email: info@traveldestinations.com
            </p>
          </div>
          
          <div style={styles.socialSection}>
            <h4 style={styles.socialTitle}>Follow Us</h4>
            <div style={styles.socialIcons}>
              <a 
                href="https://instagram.com" 
                className="text-primary social-link" 
                style={{...styles.icon, ...styles.instagramIcon}} 
                aria-label="Follow us on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-emoji" style={styles.iconEmoji}>📷</span>
                <span style={styles.iconText}>Instagram</span>
              </a>
              <a 
                href="https://facebook.com" 
                className="text-primary social-link" 
                style={{...styles.icon, ...styles.facebookIcon}} 
                aria-label="Follow us on Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-emoji" style={styles.iconEmoji}>📘</span>
                <span style={styles.iconText}>Facebook</span>
              </a>
              <a 
                href="https://twitter.com" 
                className="text-primary social-link" 
                style={{...styles.icon, ...styles.twitterIcon}} 
                aria-label="Follow us on Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-emoji" style={styles.iconEmoji}>🐦</span>
                <span style={styles.iconText}>Twitter</span>
              </a>
            </div>
          </div>
        </div>
        
        <div style={styles.divider}></div>
        
        <div style={styles.bottomSection}>
          <p className="text-secondary" style={styles.tagline}>
            🌍 Discover the world, one destination at a time
          </p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "2rem 1.5rem",
    borderRadius: "12px",
    margin: "20px auto",
    maxWidth: "1200px",
    width: "95%",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: "relative",
    overflow: "hidden"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    position: "relative",
    zIndex: 2
  },
  contentWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "2rem"
  },
  contactSection: {
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
    flex: "1",
    minWidth: "250px"
  },
  footerTitle: {
    fontSize: "1.5rem",
    margin: "0 0 0.5rem 0",
    fontWeight: "700",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text"
  },
  copyright: {
    fontSize: "0.95rem",
    margin: 0,
    fontWeight: "500",
    lineHeight: "1.4"
  },
  contact: {
    fontSize: "0.9rem",
    margin: 0,
    fontWeight: "400",
    lineHeight: "1.4"
  },
  socialSection: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "flex-end",
    minWidth: "200px"
  },
  socialTitle: {
    fontSize: "1.1rem",
    margin: 0,
    fontWeight: "600",
    color: "inherit"
  },
  socialIcons: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    flexWrap: "wrap"
  },
  icon: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    textDecoration: "none",
    transition: "all 0.3s ease",
    fontSize: "0.9rem",
    padding: "0.5rem 0.8rem",
    borderRadius: "8px",
    background: "rgba(102, 126, 234, 0.1)",
    border: "1px solid rgba(102, 126, 234, 0.2)",
    backdropFilter: "blur(10px)",
    position: "relative",
    overflow: "hidden"
  },
  iconEmoji: {
    fontSize: "1.2rem",
    transition: "transform 0.3s ease"
  },
  iconText: {
    fontWeight: "500",
    fontSize: "0.85rem"
  },
  instagramIcon: {
    ':hover': {
      background: "rgba(225, 48, 108, 0.15)",
      borderColor: "rgba(225, 48, 108, 0.3)",
      transform: "translateY(-2px)"
    }
  },
  facebookIcon: {
    ':hover': {
      background: "rgba(24, 119, 242, 0.15)",
      borderColor: "rgba(24, 119, 242, 0.3)",
      transform: "translateY(-2px)"
    }
  },
  twitterIcon: {
    ':hover': {
      background: "rgba(29, 161, 242, 0.15)",
      borderColor: "rgba(29, 161, 242, 0.3)",
      transform: "translateY(-2px)"
    }
  },
  divider: {
    height: "1px",
    background: "linear-gradient(90deg, transparent 0%, rgba(102, 126, 234, 0.3) 50%, transparent 100%)",
    margin: "0.5rem 0"
  },
  bottomSection: {
    textAlign: "center",
    paddingTop: "0.5rem"
  },
  tagline: {
    fontSize: "0.9rem",
    margin: 0,
    fontStyle: "italic",
    opacity: 0.8
  },
  // Media queries using CSS-in-JS approach
  '@media (max-width: 768px)': {
    contentWrapper: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "1.5rem"
    },
    socialSection: {
      alignItems: "center"
    },
    socialIcons: {
      justifyContent: "center"
    },
    footer: {
      margin: "20px 10px",
      padding: "1.5rem 1rem"
    }
  }
};

export default Footer;