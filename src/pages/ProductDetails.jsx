import { useParams, useNavigate } from "react-router-dom";
import { useState, useRef, useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";

/* product list same as before (only subset used here for example) */
const products = [
  { id: 1, name: "iPhone 15", price: 120000, img: "/images/iphone15.jpg", desc: "Apple iPhone 15 with A16 Bionic, 48MP camera, USB-C charging." },
  { id: 2, name: "iPhone 15 Pro", price: 135000, img: "/images/iphone15p.jpg", desc: "iPhone 15 Pro with A17 Bionic, advanced camera and titanium build." },
  { id: 3, name: "iPhone 15 Pro Max", price: 155000, img: "/images/iphone15pro.jpg", desc: "iPhone 15 Pro Max with largest screen and best camera." },
  { id: 4, name: "iPhone 14", price: 95000, img: "/images/i14.jpg", desc: "iPhone 14 with A15 Bionic, OLED Display." },
  { id: 5, name: "iPhone 14 Pro", price: 120000, img: "/images/iphone14.jpg", desc: "iPhone 14 Pro with 48MP Camera & Dynamic Island." },
  { id: 6, name: "Samsung S24", price: 90000, img: "/images/s24.jpg", desc: "Samsung S24 flagship with Snapdragon 8 Gen 3." },
  { id: 7, name: "OnePlus 12", price: 65000, img: "/images/1+12.jpg", desc: "OnePlus 12 with 100W charging & Hasselblad optics." },
  { id: 8, name: "Vivo X100", price: 78000, img: "/images/vivox100.jpg", desc: "Vivo X100 with Zeiss optics and AMOLED display." },
  { id: 9, name: "Realme GT 6", price: 45000, img: "/images/realmegt6.jpg", desc: "Realme GT 6 with 144Hz AMOLED." },
  { id: 10, name: "iQOO Z7 Pro", price: 23999, img: "/images/iqooz7.jpg", desc: "iQOO Z7 Pro with curved AMOLED." },
];

/* Specs map (not changing products) — used to show richer data */
const specs = {
  1: { storage: ["128GB","256GB","512GB"], ram: "8GB", battery: "3300mAh", display: "6.1\" OLED", chipset: "A16 Bionic", offers: ["10% Bank Discount", "No Cost EMI (3 / 6 months)"] },
  2: { storage: ["128GB","256GB","1TB"], ram: "8GB", battery: "3350mAh", display: "6.1\" ProMotion OLED", chipset: "A17 Bionic", offers: ["₹5000 Cashback", "Free Case"] },
  3: { storage: ["256GB","512GB","1TB"], ram: "12GB", battery: "3650mAh", display: "6.7\" ProMotion OLED", chipset: "A17 Bionic", offers: ["Free Earbuds", "10% Off"] },
  6: { storage: ["128GB","256GB"], ram: "12GB", battery: "4800mAh", display: "6.3\" AMOLED", chipset: "Snapdragon 8 Gen3", offers: ["Bank Offer 15%", "Exchange Bonus"] },
  // add more specs for other ids if you like; missing ids will show limited info
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pid = Number(id);
  const product = products.find((p) => p.id === pid);
  const s = specs[pid] || null;
  const { addToCart } = useContext(CartContext);

  const [selectedStorage, setSelectedStorage] = useState(s?.storage?.[0] || "Default");
  const [animPrice, setAnimPrice] = useState(0);
  const imgRef = useRef();

  // animate price count up for a nice effect
  useEffect(() => {
    let raf;
    let start;
    const duration = 700;
    const from = 0;
    const to = product?.price || 0;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const value = Math.floor(from + (to - from) * easeOutCubic(progress));
      setAnimPrice(value);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => raf && cancelAnimationFrame(raf);
  }, [product]);

  if (!product) return <div style={{ padding: 36 }}>Product not found</div>;

  return (
    <div style={stylesWrap.page}>
      <div style={stylesWrap.backRow}>
        <button style={stylesWrap.backBtn} onClick={() => navigate(-1)}>← Back to results</button>
      </div>

      <div style={stylesWrap.grid}>
        <div style={stylesWrap.left}>
          <div style={stylesWrap.imageWrap}>
            <img
              ref={imgRef}
              src={product.img}
              alt={product.name}
              style={stylesWrap.image}
              onMouseMove={(e) => {
                const rect = imgRef.current.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                imgRef.current.style.transform = `translate(${x * 12}px, ${y * 12}px) scale(1.06) rotate(${x * 2}deg)`;
              }}
              onMouseLeave={() => (imgRef.current.style.transform = "translate(0,0) scale(1) rotate(0deg)")}
              draggable={false}
            />
          </div>
        </div>

        <div style={stylesWrap.right}>
          <h1 style={stylesWrap.title}>{product.name}</h1>

          <div style={stylesWrap.priceRow}>
            <div style={stylesWrap.price}>₹{animPrice.toLocaleString()}</div>
            <div style={stylesWrap.rating}>★★★★☆</div>
          </div>

          <p style={stylesWrap.desc}>{product.desc}</p>

          {/* storage selector */}
          <div style={{ marginTop: 18 }}>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Storage</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {(s?.storage || ["Default"]).map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedStorage(st)}
                  style={{
                    ...stylesWrap.storageBtn,
                    border: selectedStorage === st ? "2px solid #6c5ce7" : "1px solid #e6e9f2",
                    transform: selectedStorage === st ? "scale(1.03)" : "scale(1)",
                  }}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* offers */}
          <div style={{ marginTop: 18 }}>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Offers</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {(s?.offers || ["No current offers"]).map((o, idx) => (
                <div key={idx} style={stylesWrap.offer}>
                  <strong>{o}</strong>
                </div>
              ))}
            </div>
          </div>

          {/* specs */}
          <div style={{ marginTop: 18 }}>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Key specs</div>
            <ul style={{ marginTop: 8, color: "#374151" }}>
              <li><b>Chipset:</b> {s?.chipset || "N/A"}</li>
              <li><b>RAM:</b> {s?.ram || "N/A"}</li>
              <li><b>Battery:</b> {s?.battery || "N/A"}</li>
              <li><b>Display:</b> {s?.display || "N/A"}</li>
            </ul>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            <button
              onClick={() => { addToCart({ id: product.id, name: product.name, price: product.price, img: product.img }, 1); alert("Added to cart"); }}
              style={stylesWrap.cta}
            >
              Add to cart
            </button>

            <button style={stylesWrap.buy}>Buy now</button>
          </div>

          <div style={{ marginTop: 22, color: "#6b7280" }}>
            <small>EMI available. Shipping in 2-4 days. Easy returns within 7 days.</small>
          </div>
        </div>
      </div>
    </div>
  );
};

/* easing */
function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

const stylesWrap = {
  page: {
    padding: 36,
    fontFamily: "'Poppins', sans-serif",
    minHeight: "80vh",
    background: "linear-gradient(180deg,#ffffff,#fbfdff)",
  },
  backRow: { maxWidth: 1100, margin: "0 auto 14px" },
  backBtn: { padding: "8px 12px", borderRadius: 10, border: "1px solid #e6e9f2", background: "#fff", cursor: "pointer" },
  grid: { maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "420px 1fr", gap: 36, alignItems: "start" },
  left: { display: "flex", alignItems: "flex-start", justifyContent: "center" },
  imageWrap: { width: 420, height: 420, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(180deg,#f7f9ff,#fff)", boxShadow: "0 18px 40px rgba(16,24,40,0.06)" },
  image: { width: "92%", height: "92%", objectFit: "contain", borderRadius: 12, transition: "transform .28s ease", willChange: "transform" },
  right: {},
  title: { fontSize: 34, margin: 0, fontWeight: 800 },
  priceRow: { display: "flex", alignItems: "center", gap: 16, marginTop: 12 },
  price: { fontSize: 28, color: "#0f172a", fontWeight: 800 },
  rating: { color: "#f59e0b" },
  desc: { color: "#4b5563", marginTop: 12 },
  storageBtn: { padding: "10px 14px", borderRadius: 10, background: "#fff", cursor: "pointer", fontWeight: 600 },
  offer: { padding: "8px 12px", borderRadius: 10, background: "linear-gradient(90deg,#e6f7ff,#fff)", border: "1px solid #dbeafe", color: "#0f172a" },
  cta: { padding: "12px 18px", background: "linear-gradient(90deg,#4e54c8,#8f94fb)", color: "#fff", border: "none", borderRadius: 12, cursor: "pointer", fontWeight: 700, boxShadow: "0 12px 30px rgba(78,84,200,0.16)" },
  buy: { padding: "12px 18px", background: "#fff", border: "1px solid #e6e9f2", borderRadius: 12, cursor: "pointer", fontWeight: 700 },
};

export default ProductDetails;
