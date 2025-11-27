import { useNavigate } from "react-router-dom";

const Cart = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = () => {
    navigate("/order-success");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛒 Your Cart</h2>

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
                  <p style={styles.text}>Quantity: {item.quantity}</p>
                </div>

                <button
                  style={styles.removeBtn}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <h2 style={styles.total}>Total Amount: ₹{total}</h2>

          <button style={styles.orderBtn} onClick={handleOrder}>
            Place Order
          </button>
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
    marginTop: "50px",
    textAlign: "center",
    fontSize: "20px",
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
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    transition: "0.3s",
  },

  img: {
    width: "95px",
    height: "95px",
    objectFit: "cover",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
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
    transition: "0.2s",
  },

  total: {
    marginTop: "25px",
    fontSize: "24px",
    fontWeight: "600",
    textAlign: "right",
    color: "#111",
  },

  orderBtn: {
    marginTop: "20px",
    padding: "15px 20px",
    width: "100%",
    background: "linear-gradient(135deg, #00c853, #009624)",
    color: "#fff",
    fontSize: "20px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    boxShadow: "0 6px 20px rgba(0, 200, 83, 0.4)",
    transition: "0.3s",
  },
};
