import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    desc: "Vivo X100 with powerful MediaTek chipset and Zeiss optics."
  },
  {
    id: 5,
    name: "Realme GT 6",
    price: 45000,
    img: "https://m.media-amazon.com/images/I/81l9tY96ToL._SL1500_.jpg",
    desc: "Realme GT 6 flagship killer with 144Hz display."
  },
  {
    id: 6,
    name: "iQOO Neo 9 Pro",
    price: 39999,
    img: "https://m.media-amazon.com/images/I/71r9B9+vSCL._SL1500_.jpg",
    desc: "iQOO Neo 9 Pro with Snapdragon 8 Gen 2 and dual chip."
  },
  {
    id: 7,
    name: "Google Pixel 8",
    price: 82000,
    img: "https://m.media-amazon.com/images/I/71SX9g+qOKL._SL1500_.jpg",
    desc: "Pixel 8 with AI photo features and Tensor G3 chip."
  },
  {
    id: 8,
    name: "Redmi Note 13 Pro+",
    price: 32000,
    img: "https://m.media-amazon.com/images/I/71rIxu36UeL._SL1500_.jpg",
    desc: "Redmi Note 13 Pro+ with curved display and 200MP camera."
  },
  {
    id: 9,
    name: "Infinix GT 20 Pro",
    price: 26000,
    img: "https://m.media-amazon.com/images/I/71Z9wWGciYL._SL1500_.jpg",
    desc: "Infinix GT 20 Pro gaming phone with RGB lights."
  },
  {
    id: 10,
    name: "Oppo Reno 11",
    price: 29999,
    img: "https://m.media-amazon.com/images/I/71q8FgSaA1L._SL1500_.jpg",
    desc: "Oppo Reno 11 with Sony IMX camera and slim design."
  },
];

const Products = ({ addToCart }) => {
  const [count, setCount] = useState({});
  const navigate = useNavigate();

  const handleAdd = (item) => {
    const newCount = { ...count };
    newCount[item.id] = (newCount[item.id] || 0) + 1;
    setCount(newCount);

    addToCart({ ...item, quantity: newCount[item.id] });
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
              {/* CLICK PRODUCT TO VIEW DETAILS */}
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
  page: {
    padding: "20px",
  },
  title: {
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "32px",
  },
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
    transition: "0.3s",
  },
  img: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  price: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "10px 0",
  },
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
