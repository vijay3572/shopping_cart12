const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",

        // Mobile shop related background image
        backgroundImage:
          "url('https://i.pinimg.com/originals/48/09/57/480957d9e8a3deb18f0bc33bd44a14bc.jpg')",

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
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.55)",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      ></div>

      {/* Text */}
      <h2
        style={{
          fontSize: "45px",
          fontWeight: "bold",
          zIndex: 2,
        }}
      >
        Welcome to Mobile Shopping
      </h2>

      <p
        style={{
          fontSize: "20px",
          marginTop: "10px",
          zIndex: 2,
        }}
      >
        Latest Smartphones • Best Offers • Fast Delivery
      </p>
    </div>
  );
};

export default Home;
