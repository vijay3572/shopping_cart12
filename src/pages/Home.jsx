import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: 1, name: "Mobile Phones", img: "/images/phone.jpg", type: "mobile" },
  { id: 2, name: "Laptops", img: "/images/laptop.jpg", type: "laptop" },
  { id: 3, name: "Earbuds", img: "/images/airpods.jpg", type: "earbuds" },
];

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  const handleCategoryClick = (type) => {
    navigate(`/products?category=${type}`);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.70), rgba(0,0,0,0.35))",
          zIndex: 1,
        }}
      />

      {/* Left Glow */}
      <div
        style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "rgba(255, 0, 120, 0.12)",
          left: "-100px",
          bottom: "80px",
          filter: "blur(90px)",
          zIndex: 1,
        }}
      />

      {/* Right Glow */}
      <div
        style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "rgba(0, 255, 200, 0.12)",
          right: "-100px",
          top: "100px",
          filter: "blur(90px)",
          zIndex: 1,
        }}
      />

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1200px",
          padding: "20px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h1
          style={{
            margin: "0 0 18px 0",
            fontSize: "64px",
            fontWeight: "800",
            lineHeight: "1.1",
            textShadow: "0 4px 14px rgba(0,0,0,0.7)",
          }}
        >
          Welcome to Shopping
        </h1>

        <p
          style={{
            margin: "0 0 50px 0",
            fontSize: "22px",
            fontWeight: "500",
            color: "rgba(255,255,255,0.92)",
            textShadow: "0 2px 8px rgba(0,0,0,0.6)",
          }}
        >
          Mobile Phones • Laptops • Earbuds
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "28px",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.type)}
              style={{
                width: "280px",
                height: "220px",
                borderRadius: "24px",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.22)",
                boxShadow: "0 12px 35px rgba(0,0,0,0.35)",
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.06)";
                e.currentTarget.style.boxShadow =
                  "0 18px 45px rgba(0,0,0,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(0,0,0,0.35)";
              }}
            >
              <img
                src={cat.img}
                alt={cat.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  position: "absolute",
                  inset: 0,
                  zIndex: 1,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.15))",
                  zIndex: 2,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#fff",
                  zIndex: 3,
                  textShadow: "2px 2px 10px rgba(0,0,0,0.9)",
                }}
              >
                {cat.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;