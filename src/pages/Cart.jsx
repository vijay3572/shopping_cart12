import { useNavigate } from "react-router-dom";

const Cart = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = () => {
    navigate("/order-success"); // navigate to success page
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
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
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

          {/* ORDER BUTTON */}
          <button style={styles.orderBtn} onClick={handleOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;

// ---- STYLES ----
const styles = {
  container: { padding: "20px", fontFamily: "Poppins" },
  heading: { marginBottom: "20px" },
  empty: { color: "#666", marginTop: "40px" },
  list: { display: "flex", flexDirection: "column", gap: "15px" },
  card: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  img: { width: "90px", height: "90px", borderRadius: "10px", objectFit: "cover" },
  info: { flex: 1 },
  removeBtn: {
    padding: "8px 12px",
    background: "crimson",
    border: "none",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
  total: { marginTop: "25px", fontSize: "22px", fontWeight: "bold" },
  orderBtn: {
    marginTop: "20px",
    padding: "12px 20px",
    width: "200px",
    background: "green",
    color: "#fff",
    fontSize: "18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
