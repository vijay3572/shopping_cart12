import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cartItems, setCart }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [error, setError] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );
  const totalItems = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Only allow numbers for phone field
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleOrder = () => {
    if (!formData.name || !formData.phone || !formData.address || !formData.city || !formData.pincode) {
      setError("Please fill all fields before placing order!");
      return;
    }
    if (!paymentMethod) {
      setError("Please select a payment method!");
      return;
    }

    setCart([]); // Clear cart
    navigate("/order-success");
  };

  return (
    <div style={container}>
      {/* Form */}
      <div style={formBox}>
        <h2 style={title}>Checkout</h2>
        {error && <p style={errorStyle}>{error}</p>}

        <label>Full Name</label>
        <input name="name" onChange={handleChange} style={inputStyle} />

        <label>Phone</label>
        <input
          name="phone"
          onChange={handleChange}
          style={inputStyle}
          placeholder="Only numbers"
        />

        <label>Address</label>
        <textarea name="address" onChange={handleChange} style={textareaStyle}></textarea>

        <label>City</label>
        <input name="city" onChange={handleChange} style={inputStyle} />

        <label>Pincode</label>
        <input name="pincode" onChange={handleChange} style={inputStyle} />

        {/* Payment Method */}
        <h3 style={subtitle}>Payment Method</h3>
        <div style={paymentContainer}>
          {["Credit Card", "UPI", "Cash on Delivery"].map((method) => (
            <label key={method} style={radioLabel}>
              <input
                type="radio"
                name="payment"
                value={method}
                checked={paymentMethod === method}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              {method}
            </label>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div style={summaryBox}>
        <h3 style={subtitle}>Order Summary</h3>
        {cartItems.map((item) => (
          <div key={item.id} style={summaryItem}>
            <img src={item.img} alt="" style={imgStyle} />
            <div>
              <p style={productName}>{item.name}</p>
              <span>{item.quantity || 1} × ₹{item.price}</span>
            </div>
          </div>
        ))}
        <p style={summaryText}>Total Items: {totalItems}</p>
        <p style={summaryText}>Total Amount: ₹{totalAmount}</p>

        {paymentMethod && (
          <button onClick={handleOrder} style={buttonStyle}>
            Place Order
          </button>
        )}
      </div>
    </div>
  );
};

// ---------- Styles ----------
const container = {
  display: "flex",
  flexWrap: "wrap",
  gap: "25px",
  padding: "30px",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)", // Soft gradient
  color: "#333",
  fontFamily: "Poppins",
  justifyContent: "center",
};

const formBox = {
  flex: "1 1 320px",
  minWidth: "280px",
  background: "#ffffff",
  padding: "25px",
  borderRadius: "18px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
};

const summaryBox = {
  flex: "1 1 320px",
  minWidth: "280px",
  background: "#ffffff",
  padding: "25px",
  borderRadius: "18px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
};

const title = { fontSize: "26px", color: "#ff6f61", marginBottom: "15px" }; // Unique accent
const subtitle = { fontSize: "20px", color: "#ff6f61", margin: "15px 0 10px 0" };
const errorStyle = { color: "#ff3b3b", fontSize: "14px", marginBottom: "10px" };

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "6px 0",
  borderRadius: "8px",
  border: "1px solid #ddd",
  background: "#f9f9f9",
  color: "#333",
};

const textareaStyle = { ...inputStyle, height: "70px", resize: "none" };

const paymentContainer = { display: "flex", flexDirection: "column", gap: "8px" };

const radioLabel = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "15px",
  cursor: "pointer",
};

const summaryItem = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "12px",
  background: "#f3f3f3",
  padding: "10px",
  borderRadius: "10px",
};

const imgStyle = { width: "55px", height: "55px", borderRadius: "8px" };
const productName = { margin: 0, fontSize: "16px" };
const summaryText = { fontSize: "16px", fontWeight: "600", margin: "6px 0" };

const buttonStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "15px",
  background: "#ff6f61",
  border: "none",
  borderRadius: "10px",
  fontWeight: "600",
  cursor: "pointer",
  color: "#fff",
  fontSize: "16px",
};

export default Checkout;
