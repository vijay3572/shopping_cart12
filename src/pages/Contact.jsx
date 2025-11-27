import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Message Sent! 🙌\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        <h2 style={styles.heading}>📞 Contact Us</h2>
        <p style={styles.subText}>We’re here to assist you anytime!</p>

        <div style={styles.infoBox}>
          <p><strong>Email:</strong> support123@mobileshop.com</p>
          <p><strong>Phone:</strong> +91 6381574367</p>
          <p><strong>Instagram:</strong> <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=ddu3sktm/yourinsta" target="_blank" rel="noreferrer" style={styles.link}>@mobile_shop_insta</a></p>
          <p><strong>Address:</strong> 123 Mobile Street, Tambaram, Chennai-600059</p>
        </div>

        {/* ⭐ Beautiful Form Box */}
        <div style={styles.formBox}>
          <form style={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
              required
            />

            <button type="submit" style={styles.button}>Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: "40px 20px",
    minHeight: "100vh",
    background: "linear-gradient(to right, #6dd5fa, #2980b9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "100%",
    maxWidth: "480px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "18px",
    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.25)",
  },

  heading: {
    fontSize: "28px",
    textAlign: "center",
    color: "#2c3e50",
    marginBottom: "5px",
  },

  subText: {
    textAlign: "center",
    color: "#555",
    marginBottom: "20px",
    fontSize: "15px",
  },

  infoBox: {
    backgroundColor: "#f8f9fa",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.12)",
    marginBottom: "25px",
    lineHeight: "1.6",
    fontSize: "15px",
  },

  link: {
    textDecoration: "none",
    color: "#e84393",
    fontWeight: "bold",
  },

  /* ⭐ FORM BOX DESIGN */
  formBox: {
    background: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(8px)",
    borderRadius: "15px",
    padding: "22px",
    border: "1px solid rgba(255,255,255,0.5)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    marginTop: "10px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    padding: "12px",
    fontSize: "15px",
    borderRadius: "8px",
    border: "1px solid #bbb",
  },

  textarea: {
    padding: "12px",
    fontSize: "15px",
    borderRadius: "8px",
    border: "1px solid #bbb",
    minHeight: "100px",
  },

  button: {
    padding: "12px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Contact;
