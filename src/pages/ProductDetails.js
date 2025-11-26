import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 120000,
    img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg",
    desc: "Apple iPhone 15 with A16 Bionic, 48MP camera, USB-C fast charging."
  },
  {
    id: 2,
    name: "Samsung S24",
    price: 90000,
    img: "https://m.media-amazon.com/images/I/71WXWqGbbOL._SL1500_.jpg",
    desc: "Samsung S24 with Snapdragon 8 Gen 3, Dynamic AMOLED screen."
  },
  {
    id: 3,
    name: "OnePlus 12",
    price: 65000,
    img: "https://m.media-amazon.com/images/I/61Io5-ojWUL._SL1500_.jpg",
    desc: "OnePlus 12 with 100W charging and Hasselblad camera system."
  },
  {
    id: 4,
    name: "Vivo X100",
    price: 78000,
    img: "https://m.media-amazon.com/images/I/61+qWfSm7pL._SL1500_.jpg",
    desc: "Vivo X100 with MediaTek chipset and Zeiss optics."
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  // If product does not exist
  if (!product) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product not found</h2>;
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <img src={product.img} alt={product.name} style={styles.img} />

        <h1>{product.name}</h1>
        <p style={styles.price}>₹{product.price}</p>
        <p style={styles.desc}>{product.desc}</p>

        <button style={styles.btn}>Add to Cart</button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: "20px",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    maxWidth: "450px",
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  img: {
    width: "100%",
    borderRadius: "12px",
  },
  price: {
    fontSize: "22px",
    fontWeight: "bold",
    marginTop: "10px",
  },
  desc: {
    fontSize: "16px",
    marginTop: "10px",
    color: "#555",
  },
  btn: {
    marginTop: "15px",
    padding: "12px 20px",
    fontSize: "16px",
    background: "black",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default ProductDetails;
