import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", padding: "100px", fontFamily: "Poppins", color: "#00eaff" }}>
      <h1>🎉 Order Placed Successfully!</h1>
      <p>Thank you for shopping with us.</p>
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "30px",
          padding: "15px 25px",
          fontSize: "18px",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
          background: "#00eaff",
          color: "#0c0c12",
          fontWeight: "600"
        }}
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderSuccess;
