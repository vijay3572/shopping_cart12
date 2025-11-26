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
`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
);
setFormData({ name: "", email: "", message: "" });
};

return ( <div style={styles.page}> <div style={styles.container}> <h2 style={styles.heading}>Contact Us</h2>

    <p style={styles.info}>Email: support@mobileshop.com</p>
    <p style={styles.info}>Phone: +91 98765 43210</p>
    <p style={styles.info}>Address: 123 Mobile Street, City, State, India</p>

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

    <div style={styles.mapPlaceholder}>
      <p>Map Placeholder</p>
    </div>
  </div>
</div>
);
};

const styles = {
page: {
padding: "40px 20px",
minHeight: "100vh",
background: "linear-gradient(to right, #74ebd5, #ACB6E5)", // gradient background
display: "flex",
justifyContent: "center",
alignItems: "center",
},
container: {
maxWidth: "600px",
width: "100%",
padding: "30px",
borderRadius: "12px",
backgroundColor: "#fff",
boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
fontFamily: "Arial, sans-serif",
},
heading: {
textAlign: "center",
marginBottom: "30px",
fontSize: "28px",
color: "#333",
},
info: {
marginBottom: "10px",
fontSize: "16px",
color: "#555",
},
form: {
display: "flex",
flexDirection: "column",
gap: "15px",
marginTop: "20px",
},
input: {
padding: "12px",
fontSize: "16px",
borderRadius: "6px",
border: "1px solid #ccc",
transition: "0.3s",
},
textarea: {
padding: "12px",
fontSize: "16px",
borderRadius: "6px",
border: "1px solid #ccc",
minHeight: "100px",
transition: "0.3s",
},
button: {
padding: "12px",
fontSize: "16px",
backgroundColor: "#00c853",
color: "#fff",
border: "none",
borderRadius: "6px",
cursor: "pointer",
fontWeight: "bold",
transition: "0.3s",
},
mapPlaceholder: {
marginTop: "30px",
height: "200px",
backgroundColor: "#eee",
display: "flex",
justifyContent: "center",
alignItems: "center",
borderRadius: "8px",
color: "#777",
fontSize: "18px",
},
};

export default Contact;
