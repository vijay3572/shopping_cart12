import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, []);

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
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #0a0d2d 0%, #1a1f4b 50%, #2e356f 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
        fontFamily: "Poppins, sans-serif",
        position: "relative",
      }}
    >
      {/* Glow Effect */}
      <div
        style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          background: "rgba(75, 227, 255, 0.12)",
          borderRadius: "50%",
          top: "8%",
          right: "-100px",
          filter: "blur(90px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "280px",
          height: "280px",
          background: "rgba(111, 115, 255, 0.14)",
          borderRadius: "50%",
          bottom: "5%",
          left: "-100px",
          filter: "blur(90px)",
          zIndex: 0,
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          position: "relative",
          zIndex: 1,
          alignItems: "stretch",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            background: "rgba(255,255,255,0.05)",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 0 20px rgba(0,0,0,0.4)",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              color: "#4be3ff",
              fontSize: "32px",
              margin: "0 0 10px 0",
              fontWeight: "700",
            }}
          >
            TechVibe Store
          </h1>

          <p
            style={{
              color: "#c7c9ff",
              margin: "0 0 20px 0",
              lineHeight: "1.6",
              fontSize: "16px",
            }}
          >
            Have any questions or need help? We're here for you!
          </p>

          <div style={{ marginTop: "10px" }}>
            <p style={infoStyle}>
              <FaEnvelope style={iconStyle} /> support@techvibestore.com
            </p>

            <p style={infoStyle}>
              <FaPhone style={iconStyle} /> +91 6381574367
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
            WebkitBackdropFilter: "blur(10px)",
            background: "rgba(255,255,255,0.08)",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 0 20px rgba(0,0,0,0.4)",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              color: "#4be3ff",
              fontSize: "26px",
              margin: "0 0 20px 0",
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
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            required
            value={formData.message}
            onChange={handleChange}
            style={{ ...inputStyle, height: "120px", resize: "none" }}
          />

          <button type="submit" style={btnStyle}>
            Send Message
          </button>
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
  color: "#e9e9ff",
  fontSize: "15px",
  outline: "none",
  transition: "0.3s",
  boxSizing: "border-box",
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
  marginTop: "5px",
};

const infoStyle = {
  display: "flex",
  alignItems: "center",
  color: "#c7c9ff",
  fontSize: "16px",
  marginBottom: "14px",
  lineHeight: "1.5",
};

const iconStyle = {
  marginRight: "10px",
  fontSize: "20px",
  color: "#4be3ff",
  flexShrink: 0,
};

export default Contact;