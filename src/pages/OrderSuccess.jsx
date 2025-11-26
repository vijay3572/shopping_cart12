const OrderSuccess = () => {
  return (
    <div style={styles.container}>
      <h1>✅ Order Placed Successfully!</h1>
      <p>Your order is confirmed. Thank you for shopping 🤝</p>

      <a href="/" style={styles.homeBtn}>Go Back to Home</a>
    </div>
  );
};

export default OrderSuccess;

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Poppins",
  },
  homeBtn: {
    marginTop: "30px",
    display: "inline-block",
    padding: "10px 20px",
    background: "#111",
    color: "#fff",
    borderRadius: "5px",
    textDecoration: "none",
  },
};
