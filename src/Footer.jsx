import React, { useState } from "react";

function Footer() {
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback, email);
    // Handle the submission (e.g., send to an API)
    setFeedback("");
    setEmail("");
  };

  return (
    <footer className="card" style={styles.container}>
      <h3 style={styles.footerTitle}>We'd Love Your Feedback!</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <textarea
          placeholder="Your feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          style={styles.textarea}
          required
        />
        <input
          type="email"
          placeholder="Your contact email (optional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Send Feedback</button>
      </form>
      <p style={styles.contactInfo}>Or contact us directly at: <a href="mailto:wetravel2@gmail.com">wetravel2@gmail.com</a></p>
    </footer>
  );
}

const styles = {
  container: {
    padding: "1.5rem",
    textAlign: "center",
  },
  footerTitle: {
    fontSize: "1.5rem",
    margin: "0 0 1rem",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
    maxWidth: "500px",
    margin: "0 auto",
  },
  textarea: {
    width: "100%",
    padding: "0.5rem",
    minHeight: "100px",
    borderRadius: "5px",
    borderColor: "#aaa",
    resize: "vertical",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    borderRadius: "5px",
    borderColor: "#aaa",
  },
  button: {
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    backgroundColor: "#646cff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  contactInfo: {
    marginTop: "1rem",
  },
};

export default Footer;