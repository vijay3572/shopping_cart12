import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background:
          "linear-gradient(135deg, #0a0d2d 0%, #1a1f4b 50%, #2e356f 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            backdropFilter: "blur(10px)",
            background: "rgba(255,255,255,0.05)",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 0 20px rgba(0,0,0,0.4)",
          }}
        >
          <h1
            style={{
              color: "#4be3ff", // Updated cyan title
              fontSize: "32px",
              marginBottom: "10px",
              fontWeight: "700",
            }}
          >
            TechVibe Store
          </h1>

          <p
            style={{
              color: "#c7c9ff", // Soft lavender text
              marginBottom: "20px",
              lineHeight: "1.6",
            }}
          >
            Have any questions or need help? We're here for you!
          </p>

          <div style={{ marginTop: "20px" }}>
            <p style={infoStyle}>
              <FaEnvelope style={iconStyle} /> support@techvibestore.com
            </p>

            <p style={infoStyle}>
              <FaPhone style={iconStyle} /> +91 98765 43210
            </p>

            <p style={infoStyle}>
              <FaInstagram style={iconStyle} /> @techvibe_store
            </p>

            <p style={infoStyle}>
              <FaMapMarkerAlt style={iconStyle} /> Chennai, Tamil Nadu — India
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          style={{
            backdropFilter: "blur(10px)",
            background: "rgba(255,255,255,0.08)",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 0 20px rgba(0,0,0,0.4)",
          }}
        >
          <h2
            style={{
              color: "#4be3ff", // Title color changed to soft neon cyan
              fontSize: "26px",
              marginBottom: "20px",
              fontWeight: "600",
            }}
          >
            Send us a message
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            required
            onChange={handleChange}
            style={{ ...inputStyle, height: "120px", resize: "none" }}
          />

          <button style={btnStyle}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

/* SHARED STYLES */
const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  marginBottom: "15px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.3)",
  background: "rgba(255,255,255,0.1)",
  color: "#e9e9ff", // Soft white-lavender
  fontSize: "15px",
  outline: "none",
  transition: "0.3s",
};

const btnStyle = {
  width: "100%",
  padding: "15px",
  fontSize: "17px",
  borderRadius: "12px",
  border: "none",
  background: "linear-gradient(135deg, #6f73ff, #4be3ff)",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "600",
  transition: "0.3s",
};

const infoStyle = {
  display: "flex",
  alignItems: "center",
  color: "#c7c9ff", // lavender text
  fontSize: "16px",
  marginBottom: "12px",
};

const iconStyle = {
  marginRight: "10px",
  fontSize: "20px",
  color: "#4be3ff", // neon cyan
  transition: "0.3s",
};

export default Contact;
