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
              <div
                onClick={() => openProduct(item.id)}
                style={{ cursor: "pointer" }}
              >
                <img src={item.img} alt={item.name} style={styles.img} />
                <h3 style={styles.name}>{item.name}</h3>
              </div>

              <p style={styles.price}>₹{item.price}</p>

              <button
                style={{
                  ...styles.btn,
                  backgroundColor: qty > 0 ? "#16a34a" : "#111",
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

// ⭐ Modern Trending Styles ⭐
const styles = {
  page: {
    padding: "30px",
    background: "#f5f5f5",
    minHeight: "100vh",
  },

  title: {
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "36px",
    fontWeight: "900",
    color: "#111",
    letterSpacing: "1px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    padding: "10px 40px",
  },

  card: {
    background: "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    padding: "18px",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    transition: "0.3s",
    cursor: "pointer",
    transform: "translateY(0)",
    hoverEffect: {
      transform: "translateY(-8px)",
    },
  },

  img: {
    width: "100%",
    height: "230px",
    objectFit: "cover",
    borderRadius: "14px",
    marginBottom: "10px",
    transition: "0.3s",
  },

  name: {
    fontSize: "20px",
    margin: "5px 0",
    color: "#222",
  },

  price: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "10px 0",
    color: "#444",
  },

  btn: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Products;
