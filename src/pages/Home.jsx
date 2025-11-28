import { useNavigate } from "react-router-dom";

const categories = [
  { id: 1, name: "Mobile Phones", img: "/images/phone.jpg", type: "mobile" },
  { id: 2, name: "Laptops", img: "/images/laptop.jpg", type: "laptop" },
  { id: 3, name: "Earbuds", img: "/images/airpods.jpg", type: "earrbuds" },
];

const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (type) => {
    navigate(`/products?category=${type}`);
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textShadow: "2px 2px 8px rgba(0,0,0,0.9)",
        position: "relative",
        overflow: "hidden",
        padding: "40px 20px",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.75), rgba(0,0,0,0.3))",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      ></div>

      {/* Glow Circles */}
      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          background: "rgba(0, 255, 200, 0.15)",
          borderRadius: "50%",
          top: "20%",
          right: "-100px",
          filter: "blur(80px)",
          zIndex: 1,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "rgba(255, 0, 120, 0.15)",
          borderRadius: "50%",
          bottom: "15%",
          left: "-120px",
          filter: "blur(80px)",
          zIndex: 1,
        }}
      ></div>

      {/* Page Title */}
      <div
        style={{
          zIndex: 2,
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h2
          style={{
            fontSize: "55px",
            fontWeight: "800",
            letterSpacing: "2px",
            marginBottom: "15px",
            animation: "floatUp 2s ease-in-out infinite alternate",
          }}
        >
          Welcome to Shopping
        </h2>

        <p
          style={{
            fontSize: "22px",
            opacity: 0,
            maxWidth: "480px",
            margin: "0 auto",
            animation: "slideFadeIn 2s ease-in-out forwards 0.5s",
            letterSpacing: "1px",
          }}
        >
          Mobile Phones • Laptops • rbuds
        </p>
      </div>

      {/* Categories Grid */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          zIndex: 2,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => handleCategoryClick(cat.type)}
            style={{
              position: "relative",
              width: "250px",
              height: "200px",
              cursor: "pointer",
              borderRadius: "20px",
              overflow: "hidden",
              backdropFilter: "blur(12px)",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "20px",
              transition: "0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.boxShadow = "0 15px 50px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.2)";
            }}
          >
            <img
              src={cat.img}
              alt={cat.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
                opacity: 0.6,
              }}
            />
            <h3
              style={{
                zIndex: 2,
                color: "#fff",
                fontSize: "22px",
                fontWeight: "700",
                textShadow: "2px 2px 10px rgba(0,0,0,0.8)",
              }}
            >
              {cat.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes floatUp {
            0% { transform: translateY(0px); }
            100% { transform: translateY(-15px); }
          }

          @keyframes slideFadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
