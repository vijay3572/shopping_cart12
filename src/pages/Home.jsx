const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",

        // ⭐ New Background (Option 2)
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
      }}
    >
      {/* Gradient Overlay */}
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

      {/* Floating Glow Circle 1 */}
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

      {/* Floating Glow Circle 2 */}
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

      {/* MAIN TITLE */}
      <h2
        style={{
          fontSize: "55px",
          fontWeight: "800",
          zIndex: 2,
          letterSpacing: "2px",
          textAlign: "center",
          animation: "glow 2.5s ease-in-out infinite",
        }}
      >
        Welcome to Mobile Shopping
      </h2>

      {/* SUB TEXT */}
      <p
        style={{
          fontSize: "22px",
          marginTop: "15px",
          zIndex: 2,
          opacity: 0.9,
          textAlign: "center",
        }}
      >
        Latest Smartphones • Best Offers • Fast Delivery
      </p>

      {/* CTA BUTTON */}
      <button
        onClick={() => (window.location.href = "/products")}
        style={{
          marginTop: "25px",
          padding: "14px 30px",
          zIndex: 2,
          fontSize: "18px",
          border: "none",
          borderRadius: "50px",
          cursor: "pointer",
          fontWeight: "600",
          background:
            "linear-gradient(135deg, #00eaff, #007bff, #0048ff)",
          color: "#fff",
          boxShadow: "0px 10px 25px rgba(0, 150, 255, 0.4)",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        Shop Now
      </button>

      {/* Glow Animation */}
      <style>
        {`
        @keyframes glow {
          0% { text-shadow: 0 0 8px #00eaff; }
          50% { text-shadow: 0 0 18px #00eaff; }
          100% { text-shadow: 0 0 8px #00eaff; }
        }
        `}
      </style>
    </div>
  );
};

export default Home;
