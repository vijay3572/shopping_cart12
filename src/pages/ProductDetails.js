import { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 120000,
    img: "/images/iphone15.jpg",
    desc: "Apple iPhone 15 with A16 Bionic, 48MP camera, USB-C charging.",
  },
  {
    id: 2,
    name: "Samsung S24",
    price: 90000,
    img: "/images/s24.jpg",
    desc: "Samsung S24 with Snapdragon 8 Gen 3, Dynamic AMOLED screen.",
  },
  {
    id: 3,
    name: "OnePlus 12",
    price: 65000,
    img: "/images/oneplus12.jpg",
    desc: "OnePlus 12 with 100W charging and Hasselblad camera.",
  },
  {
    id: 4,
    name: "Vivo X100",
    price: 78000,
    img: "/images/vivo.jpg",
    desc: "Vivo X100 with MediaTek chipset and Zeiss optics.",
  },
  {
    id: 5,
    name: "Realme GT 6",
    price: 45000,
    img: "/images/realme.jpg",
    desc: "Realme GT 6 with 144Hz AMOLED display.",
  },
];

const Products = ({ addToCart }) => {
  const [count, setCount] = useState({});
  const navigate = useNavigate();

  const handleAdd = (item) => {
    const updated = { ...count };
    updated[item.id] = (updated[item.id] || 0) + 1;
    setCount(updated);

    addToCart({ ...item, quantity: updated[item.id] });
  };

  const openProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Mobile Phones</h1>

      <div style={styles.grid}>
        {products.map((item) => {
          const qty = count[item.id] || 0;

          return (
            <div key={item.id} style={styles.card}>
              <div onClick={() => openProduct(item.id)} style={{ cursor: "pointer" }}>
                <img src={item.img} alt={item.name} style={styles.img} />
                <h3>{item.name}</h3>
              </div>

              <p style={styles.price}>₹{item.price}</p>

              <button
                style={{
                  ...styles.btn,
                  backgroundColor: qty > 0 ? "green" : "#111",
                }}
                onClick={() => handleAdd(item)}
              >
                {qty > 0 ? `Added (${qty})` : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  page: { padding: "20px" },
  title: { textAlign: "center", marginBottom: "25px", fontSize: "32px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    padding: "10px 40px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
  },
  img: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  price: { fontSize: "18px", fontWeight: "bold", margin: "10px 0" },
  btn: {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Products;
