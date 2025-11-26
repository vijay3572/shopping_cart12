import { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  // iPhone Series
  {
    id: 1,
    name: "iPhone 15",
    price: 120000,
    img: "/images/iphone15.jpg",
    desc: "Apple iPhone 15 with A16 Bionic, 48MP camera, USB-C charging.",
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 135000,
    img: "/images/iphone15p.jpg",
    desc: "iPhone 15 Pro with A17 Bionic, 5G, and advanced camera features.",
  },
  {
    id: 3,
    name: "iPhone 15 Pro Max",
    price: 155000,
    img: "/images/iphone15pro.jpg",
    desc: "iPhone 15 Pro Max with largest screen and enhanced camera system.",
  },
  {
    id: 4,
    name: "iPhone 14",
    price: 95000,
    img: "/images/i14.jpg",
    desc: "iPhone 14 with A15 Bionic, Dual-camera system, and OLED display.",
  },
  {
    id: 5,
    name: "iPhone 14 Pro",
    price: 120000,
    img: "/images/iphone14.jpg",
    desc: "iPhone 14 Pro with ProMotion, Dynamic Island, and 48MP camera.",
  },

  // Other brands
  {
    id: 6,
    name: "Samsung S24",
    price: 90000,
    img: "/images/s24.jpg",
    desc: "Samsung S24 with Snapdragon 8 Gen 3, Dynamic AMOLED screen.",
  },
  {
    id: 7,
    name: "OnePlus 12",
    price: 65000,
    img: "/images/1+12.jpg",
    desc: "OnePlus 12 with 100W charging and Hasselblad camera.",
  },
  {
    id: 8,
    name: "Vivo X100",
    price: 78000,
    img: "/images/vivox100.jpg",
    desc: "Vivo X100 with MediaTek chipset and Zeiss optics.",
  },
  {
    id: 9,
    name: "Realme GT 6",
    price: 45000,
    img: "/images/realmegt6.jpg",
    desc: "Realme GT 6 with 144Hz AMOLED display.",
  },
  {
    id: 10,
    name: "iQOO Z7 Pro",
    price: 23999,
    img: "/images/iqooz7.jpg",
    desc: "iQOO Z7 Pro with curved AMOLED and Dimensity processor.",
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
                <p style={styles.desc}>{item.desc}</p>
              </div>

              <p style={styles.price}>₹{item.price}</p>

              <button
                style={{
                  ...styles.btn,
                  background: qty > 0
                    ? "linear-gradient(90deg, #28a745, #218838)"
                    : "linear-gradient(90deg, #111, #333)",
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
  page: {
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#f0f2f5",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "36px",
    color: "#222",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    padding: "0 40px",
  },
  card: {
    background: "#fff",
    borderRadius: "15px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  img: {
    width: "100%",
    height: "240px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "15px",
    transition: "transform 0.3s",
  },
  name: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "8px",
  },
  desc: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "12px",
  },
  price: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#000",
  },
  btn: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

// Optional: Add hover effect using inline style (React does not support pseudo-classes directly)
styles.card[":hover"] = {
  transform: "translateY(-5px)",
  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
};

export default Products;
