import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "iPhone 15", price: 120000, storage: "128GB / 256GB / 512GB", model: "iPhone 15", color: "Black / White / Red", offers: "10% Bank Discount | Free Delivery", discount: 0, img: "/images/iphone15.jpg", desc: "Apple iPhone 15 with A16 Bionic, 48MP camera, USB-C charging." },
  { id: 2, name: "iPhone 15 Pro", price: 135000, storage: "128GB / 256GB / 1TB", model: "iPhone 15 Pro", color: "Silver / Gold / Blue", offers: "₹5000 Cashback | No Cost EMI", discount: 10, img: "/images/iphone15p.jpg", desc: "iPhone 15 Pro with A17 Bionic, Titanium build, advanced camera." },
  { id: 3, name: "iPhone 15 Pro Max", price: 155000, storage: "256GB / 512GB / 1TB", model: "iPhone 15 Pro Max", color: "Graphite / Silver / Blue", offers: "Free Case + 10% Discount", discount: 5, img: "/images/iphone15pro.jpg", desc: "Largest display, best camera, A17 Bionic chip." },
  { id: 4, name: "iPhone 14", price: 95000, storage: "128GB / 256GB", model: "iPhone 14", color: "Midnight / Starlight / Red", offers: "Free Delivery | EMI Available", discount: 0, img: "/images/i14.jpg", desc: "iPhone 14 with A15 Bionic, OLED Display." },
  { id: 5, name: "iPhone 14 Pro", price: 120000, storage: "128GB / 256GB / 512GB", model: "iPhone 14 Pro", color: "Silver / Gold / Deep Purple", offers: "Free Case", discount: 5, img: "/images/iphone14.jpg", desc: "iPhone 14 Pro with 48MP Camera & Dynamic Island."},
  { id: 6, name: "Samsung S24", price: 90000, storage: "256GB / 512GB", model: "S24", color: "Black / Green", offers: "No Cost EMI", discount: 0, img: "/images/s24.jpg", desc: "Samsung S24 flagship with Snapdragon 8 Gen 3." },
  { id: 7, name: "OnePlus 12", price: 65000, storage: "128GB / 256GB", model: "OnePlus 12", color: "Black / Red", offers: "Free Delivery", discount: 0, img: "/images/1+12.jpg", desc: "OnePlus 12 with 100W charging & Hasselblad optics." },
  { id: 8, name: "Vivo X100", price: 78000, storage: "256GB", model: "X100", color: "Black / Blue", offers: "Free Earphones", discount: 0, img: "/images/vivox100.jpg", desc: "Vivo X100 with Zeiss optics and AMOLED display."},
  { id: 9, name: "Realme GT 6", price: 45000, storage: "128GB / 256GB", model: "GT 6", color: "Silver / Blue", offers: "10% Discount", discount: 0, img: "/images/realmegt6.jpg", desc: "Realme GT 6 with 144Hz AMOLED." },
  { id: 10, name: "iQOO Z7 Pro", price: 23999, storage: "128GB / 256GB", model: "Z7 Pro", color: "Black / Purple", offers: "Free Case", discount: 0, img: "/images/iqooz7.jpg", desc: "iQOO Z7 Pro with curved AMOLED." },
  { id: 11, name: "MacBook Pro 16", price: 250000, storage: "512GB / 1TB / 2TB", model: "MacBook Pro 16", color: "Silver / Space Gray", offers: "10% Discount for Students", discount: 10, img: "/images/macbook16pro.jpg", desc: "Apple MacBook Pro 16 with M2 Max Chip and Retina Display." },
  { id: 12, name: "Dell XPS 15", price: 185000, storage: "512GB / 1TB", model: "XPS 15", color: "Silver", offers: "Free Laptop Bag", discount: 5, img: "/images/dellxps15.jpg", desc: "Dell XPS 15 with Intel i9 and 4K OLED display."},
  { id: 13, name: "HP Spectre x360", price: 150000, storage: "512GB / 1TB", model: "Spectre x360", color: "Silver / Black", offers: "Free Sleeve", discount: 0, img: "/images/hpspectrex360.jpg", desc: "HP Spectre x360 2-in-1 convertible laptop."},
  { id: 14, name: "AirPods Pro", price: 25000, model: "AirPods Pro", color: "White", offers: "Free Case", discount: 0, img: "/images/airpodspro.jpg", desc: "Apple AirPods Pro with noise cancellation and immersive sound."},
  { id: 15, name: "Sony WF-1000XM5", price: 22000, model: "WF-1000XM5", color: "Black / Silver", offers: "5% Cashback", discount: 5, img: "/images/sonywf.jpg", desc: "Sony wireless earbuds with industry-leading ANC and long battery life."},
  { id: 16, name: "OnePlus Buds Pro 2", price: 12000, model: "Buds Pro 2", color: "White / Black", offers: "Free Delivery", discount: 0, img: "/images/oneplus.jpg", desc: "OnePlus Buds Pro 2 with 94ms low-latency and great sound."},
];

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h1 style={{ textAlign: "center", marginTop: "50px" }}>Product Not Found</h1>;

  const handleAdd = () => {
    addToCart(product);
    alert(`${product.name} added to cart ✅`);
  };

  return (
    <div style={styles.container}>
      <img src={product.img} alt={product.name} style={styles.img} />

      <div style={styles.info}>
        <h1 style={styles.title}>{product.name}</h1>

        <p style={styles.price}>
          ₹{(product.price * (1 - (product.discount || 0)/100)).toLocaleString()}
          {product.discount > 0 && <span style={{ textDecoration: "line-through", color: "#999", marginLeft: 8 }}>₹{product.price.toLocaleString()}</span>}
        </p>

        <p style={styles.desc}>{product.desc}</p>

        {product.storage && <p style={styles.label}><b>Storage:</b> {product.storage}</p>}
        {product.model && <p style={styles.label}><b>Model:</b> {product.model}</p>}
        {product.color && <p style={styles.label}><b>Color:</b> {product.color}</p>}
        {product.offers && <p style={styles.label}><b>Offers:</b> {product.offers}</p>}
        {product.discount > 0 && <p style={styles.label}><b>Discount:</b> {product.discount}% OFF</p>}

        <button style={styles.btn} onClick={handleAdd}>Add to Cart</button>
      </div>
    </div>
  );
};

// STYLES (unchanged)
const styles = {
  container: {
    display: "flex",
    gap: "40px",
    padding: "40px",
    fontFamily: "Poppins, sans-serif",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  img: {
    width: "380px",
    height: "450px",
    objectFit: "cover",
    borderRadius: "12px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
  },
  info: {
    flex: 1,
    minWidth: "300px",
    maxWidth: "600px",
  },
  title: { fontSize: "40px", fontWeight: "700" },
  price: { fontSize: "30px", color: "#2c3e50", marginTop: "10px" },
  desc: { fontSize: "16px", marginTop: "15px" },
  label: { marginTop: "12px", fontSize: "18px" },
  btn: {
    marginTop: "20px",
    padding: "15px",
    width: "250px",
    background: "linear-gradient(135deg,#4e54c8,#8f94fb)",
    border: "none",
    color: "#fff",
    borderRadius: "12px",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default ProductDetails;
