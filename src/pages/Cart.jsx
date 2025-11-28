import { useNavigate } from "react-router-dom";

const Cart = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();

  // Total calculation
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const goToCheckout = () => {
    navigate("/checkout"); // Navigate to Checkout
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛒 Your Cart</h2>

      {/* Summary Box */}
      {cart.length > 0 && (
        <div style={styles.summaryCard}>
          <p style={styles.summaryText}><strong>Total Items:</strong> {totalItems}</p>
          <p style={styles.summaryText}><strong>Total Amount:</strong> ₹{totalAmount}</p>
        </div>
      )}

      {/* Empty Cart */}
      {cart.length === 0 ? (
        <h3 style={styles.empty}>Your cart is empty!</h3>
      ) : (
        <>
          <div style={styles.list}>
            {cart.map((item) => (
              <div key={item.id} style={styles.card}>
                <img src={item.img} alt={item.name} style={styles.img} />
                <div style={styles.info}>
                  <h3 style={styles.productName}>{item.name}</h3>
                  <p style={styles.text}>Price: ₹{item.price}</p>
                  <p style={styles.text}>Quantity: {item.quantity || 1}</p>
                </div>
                <button style={styles.removeBtn} onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          {/* Checkout Button */}
          <button style={styles.orderBtn} onClick={goToCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;

// ------------------ STYLES ------------------
const styles = {
  container: {
    padding: "25px",
    fontFamily: "Poppins",
    maxWidth: "900px",
    margin: "0 auto",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "32px",
    fontWeight: "600",
    textAlign: "center",
    color: "#222",
  },
  empty: {
    color: "#555",
    marginTop: "40px",
    textAlign: "center",
    fontSize: "20px",
  },
  summaryCard: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 20px",
    background: "linear-gradient(135deg, #eef2ff, #dfe4ff)",
    borderRadius: "15px",
    marginBottom: "25px",
    boxShadow: "0 4px 18px rgba(0,0,0,0.15)",
  },
  summaryText: {
    fontSize: "18px",
    color: "#333",
    fontWeight: "600",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    borderRadius: "15px",
    background: "rgba(255, 255, 255, 0.9)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
  },
  img: {
    width: "95px",
    height: "95px",
    objectFit: "cover",
    borderRadius: "12px",
  },
  info: { flex: 1 },
  productName: { marginBottom: "5px", fontSize: "20px", color: "#111" },
  text: { margin: "3px 0", color: "#444" },
  removeBtn: {
    padding: "10px 14px",
    background: "linear-gradient(135deg, #ff3b3b, #b30000)",
    border: "none",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
  },
  orderBtn: {
    marginTop: "25px",
    padding: "15px 20px",
    width: "100%",
    background: "linear-gradient(135deg, #00c853, #009624)",
    color: "#fff",
    fontSize: "20px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
  },
};
