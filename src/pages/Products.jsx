import { useState } from "react";
import { useNavigate } from "react-router-dom";

// -------------------- PRODUCTS DATA --------------------
const products = [
  { id: 1, name: "iPhone 15", price: 120000, img: "/images/iphone15.jpg", desc: "Apple iPhone 15 with A16 Bionic, 48MP camera, USB-C charging.", category: "mobile", rating: 4.5, discount: 0 },
  { id: 2, name: "iPhone 15 Pro", price: 135000, img: "/images/iphone15p.jpg", desc: "iPhone 15 Pro with A17 Bionic, advanced camera and titanium build.", category: "mobile", rating: 4.8, discount: 10 },
  { id: 3, name: "iPhone 15 Pro Max", price: 155000, img: "/images/iphone15pro.jpg", desc: "iPhone 15 Pro Max with largest screen and best camera.", category: "mobile", rating: 4.7, discount: 5 },
  { id: 4, name: "iPhone 14", price: 95000, img: "/images/i14.jpg", desc: "iPhone 14 with A15 Bionic, OLED Display.", category: "mobile", rating: 4.3, discount: 0 },
  { id: 5, name: "iPhone 14 Pro", price: 120000, img: "/images/iphone14.jpg", desc: "iPhone 14 Pro with 48MP Camera & Dynamic Island.", category: "mobile", rating: 4.6, discount: 5 },
  { id: 6, name: "Samsung S24", price: 90000, img: "/images/s24.jpg", desc: "Samsung S24 flagship with Snapdragon 8 Gen 3.", category: "mobile", rating: 4.4, discount: 0 },
  { id: 7, name: "OnePlus 12", price: 65000, img: "/images/1+12.jpg", desc: "OnePlus 12 with 100W charging & Hasselblad optics.", category: "mobile", rating: 4.2, discount: 0 },
  { id: 8, name: "Vivo X100", price: 78000, img: "/images/vivox100.jpg", desc: "Vivo X100 with Zeiss optics and AMOLED display.", category: "mobile", rating: 4.1, discount: 0 },
  { id: 9, name: "Realme GT 6", price: 45000, img: "/images/realmegt6.jpg", desc: "Realme GT 6 with 144Hz AMOLED.", category: "mobile", rating: 4, discount: 0 },
  { id: 10, name: "iQOO Z7 Pro", price: 23999, img: "/images/iqooz7.jpg", desc: "iQOO Z7 Pro with curved AMOLED.", category: "mobile", rating: 3.9, discount: 0 },
  { id: 11, name: "MacBook Pro 16", price: 250000, img: "/images/macbook16pro.jpg", desc: "Apple MacBook Pro 16 with M2 Max Chip.", category: "laptop", rating: 4.9, discount: 10 },
  { id: 12, name: "Dell XPS 15", price: 185000, img: "/images/dellxps15.jpg", desc: "Dell XPS 15 with Intel i9 and 4K OLED display.", category: "laptop", rating: 4.7, discount: 5 },
  { id: 13, name: "HP Spectre x360", price: 150000, img: "/images/hpspectrex360.jpg", desc: "HP Spectre x360 2-in-1 convertible laptop.", category: "laptop", rating: 4.6, discount: 0 },
  { id: 14, name: "AirPods Pro", price: 25000, img: "/images/airpodspro.jpg", desc: "Apple AirPods Pro with noise cancellation.", category: "earbuds", rating: 4.8, discount: 0 },
  { id: 15, name: "Sony WF-1000XM5", price: 22000, img: "/images/sonywf.jpg", desc: "Sony wireless earbuds with industry-leading ANC.", category: "earbuds", rating: 4.7, discount: 5 },
  { id: 16, name: "OnePlus Buds Pro 2", price: 12000, img: "/images/oneplus.jpg", desc: "OnePlus Buds Pro 2 with 94ms low-latency.", category: "earbuds", rating: 4.3, discount: 0 },
];

// -------------------- PRODUCTS COMPONENT --------------------
const Products = ({ addToCart }) => {
  const [search, setSearch] = useState("");
  const [hovered, setHovered] = useState(null);
  const [addedItems, setAddedItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const navigate = useNavigate();

  // Filter products by search & category
  const filteredProducts = products.filter(
    (p) =>
      (p.name.toLowerCase().includes(search.toLowerCase()) ||
       p.category.toLowerCase().includes(search.toLowerCase())) &&
      (activeCategory === "all" || p.category === activeCategory)
  );

  // Group products by category
  const groupedProducts = filteredProducts.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  // Tilt hover effect
  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;
    card.style.transform = `perspective(900px) rotateX(${dy*5}deg) rotateY(${-dx*5}deg) scale(1.03)`;
    card.style.boxShadow = `${-dx*12}px ${dy*18}px 40px rgba(78,84,200,0.25)`;
  };

  const resetTilt = (e) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    card.style.boxShadow = "0 12px 30px rgba(0,0,0,0.12)";
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <div style={{ color: "#f59e0b" }}>
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)}
      </div>
    );
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedItems((prev) => [...prev, item.id]);
    setTimeout(() => {
      setAddedItems((prev) => prev.filter((id) => id !== item.id));
    }, 1500);
  };

  const categories = ["all", "mobile", "laptop", "earbuds"];

  return (
    <div style={styles.page}>
      <h1 style={styles.brand}>TechVibe ⚡</h1>

      {/* Category Tabs */}
      <div style={styles.tabs}>
        {categories.map(cat => (
          <button
            key={cat}
            style={{ ...styles.tabBtn, ...(activeCategory === cat ? styles.activeTab : {}) }}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Search */}
      <div style={styles.searchContainer}>
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />
      </div>

      {/* Products Grid */}
      {Object.keys(groupedProducts).map(category => (
        <div key={category} style={{ marginBottom: 40 }}>
          <h2 style={styles.categoryTitle}>{category.toUpperCase()}</h2>
          <div style={styles.grid}>
            {groupedProducts[category].map(item => (
              <div
                key={item.id}
                style={styles.card}
                onMouseMove={handleTilt}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={(e) => { setHovered(null); resetTilt(e); }}
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <div style={{ ...styles.accent, opacity: hovered === item.id ? 0.3 : 0.08 }} />
                {(item.name.includes("iPhone 15")) && <div style={styles.newBadge}>NEW</div>}
                {item.discount > 0 && <div style={styles.discountBadge}>-{item.discount}%</div>}
                <img src={item.img} alt={item.name} style={styles.img} />
                <h3 style={styles.name}>{item.name}</h3>
                <div style={styles.row}>
                  <p style={styles.price}>
                    {item.discount > 0 
                      ? <>₹{(item.price*(1-item.discount/100)).toLocaleString()} <span style={{textDecoration:"line-through", color:"#999", fontSize:14}}>₹{item.price.toLocaleString()}</span></> 
                      : <>₹{item.price.toLocaleString()}</>
                    }
                  </p>
                  <p style={styles.categoryLabel}>{item.category.toUpperCase()}</p>
                </div>
                <p style={styles.desc}>{item.desc}</p>
                <div style={{marginBottom: 8}}>{renderStars(item.rating)}</div>
                <div style={styles.actions}>
                  <button
                    style={{
                      ...styles.cartBtn,
                      background: addedItems.includes(item.id) ? "#22c55e" : "linear-gradient(90deg,#4e54c8,#8f94fb)"
                    }}
                    onClick={(e) => { e.stopPropagation(); handleAddToCart(item); }}
                  >
                    {addedItems.includes(item.id) ? "Added ✅" : "Add to Cart"}
                  </button>
                  <button style={styles.viewBtn} onClick={(e) => { e.stopPropagation(); navigate(`/product/${item.id}`); }}>
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// -------------------- STYLES --------------------
const styles = {
  page: { padding: 36, minHeight: "100vh", fontFamily: "'Poppins', sans-serif", background: "linear-gradient(120deg, #f0f0ff 0%, #fff0f7 100%)" },
  brand: { fontSize: 40, fontWeight: 800, textAlign: "center", marginBottom: 16, color: "#4e54c8", textShadow: "0 0 8px #8f94fb" },
  tabs: { display: "flex", justifyContent: "center", gap: 16, marginBottom: 20 },
  tabBtn: { padding: "10px 20px", borderRadius: 12, border: "1px solid #aaa", background: "#fff", cursor: "pointer", fontWeight: 600, transition: "all 0.2s" },
  activeTab: { background: "#4e54c8", color: "#fff", border: "1px solid #4e54c8" },
  searchContainer: { display: "flex", justifyContent: "center", marginBottom: 30 },
  search: { width: 400, padding: 12, fontSize: 16, borderRadius: 12, border: "1px solid #aaa", outline: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" },
  categoryTitle: { fontSize: 28, fontWeight: 700, marginBottom: 20, color: "#334155", textAlign: "left" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 26 },
  card: { position: "relative", background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", padding: 20, borderRadius: 20, boxShadow: "0 12px 30px rgba(0,0,0,0.12)", cursor: "pointer", display: "flex", flexDirection: "column", transition: "transform 0.25s ease, box-shadow 0.25s ease" },
  accent: { position: "absolute", top: "-20%", right: "-20%", width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle at 30% 30%, rgba(142,100,255,0.18), rgba(78,84,200,0.06) 45%, transparent 60%)", pointerEvents: "none" },
  newBadge: { position: "absolute", top: 12, right: 12, background: "linear-gradient(90deg, #4ade80, #16a34a)", color: "#fff", padding: "4px 8px", borderRadius: 8, fontWeight: 700, fontSize: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" },
  discountBadge: { position: "absolute", top: 12, left: 12, background: "linear-gradient(90deg, #ff6161, #ff9955)", color: "#fff", padding: "4px 8px", borderRadius: 8, fontWeight: 700, fontSize: 12, boxShadow: "0 4px 12px rgba(255,97,97,0.2)" },
  img: { width: "100%", height: 200, objectFit: "contain", marginBottom: 12, transition: "transform 0.28s ease" },
  name: { fontSize: 18, fontWeight: 700, marginBottom: 6 },
  row: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  price: { fontSize: 16, fontWeight: 600 },
  categoryLabel: { fontSize: 12, fontWeight: 600, color: "#555" },
  desc: { fontSize: 14, color: "#555", marginBottom: 12 },
  actions: { display: "flex", gap: 10 },
  cartBtn: { flex: 1, padding: 10, borderRadius: 10, border: "none", color: "#fff", cursor: "pointer", transition:"all 0.2s ease" },
  viewBtn: { flex: 1, padding: 10, borderRadius: 10, border: "1px solid #dbeafe", background: "#fff", color: "#334155", cursor: "pointer", transition:"all 0.2s ease" },
};

export default Products;
