import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ cartCount }) => {
  const [clickedLink, setClickedLink] = useState(null);

  const handleClick = (link) => {
    setClickedLink(link);
    setTimeout(() => setClickedLink(null), 200); // reset after animation
  };

  const links = [
    { text: "Home", path: "/" },
    { text: "Products", path: "/products" },
    { text: "Contact", path: "/contact" },
    { text: `Cart (${cartCount})`, path: "/cart" },
  ];

  return (
    <nav
      style={{
        width: "100%",
        height: "70px",
        backgroundColor: "#111",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 40px",
        position: "fixed",
        top: 0,
        left: 0,
        boxSizing: "border-box",
        zIndex: 1000,
        boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
        backdropFilter: "blur(6px)",
      }}
    >
      {/* Shop Logo / Name */}
      <h2
        style={{
          margin: 0,
          fontSize: "26px",
          fontWeight: "800",
          color: "#00f0ff", // Matching background
          textShadow: "0 0 10px #00f0ff, 0 0 20px #00f0ff",
          transition: "all 0.3s ease",
        }}
      >
        TechVibe ⚡
      </h2>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "30px", fontSize: "18px" }}>
        {links.map(({ text, path }) => (
          <NavLink
            key={text}
            to={path}
            onClick={() => handleClick(text)}
            style={({ isActive }) => ({
              color: isActive ? "#00f0ff" : "#fff",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
              cursor: "pointer",
              position: "relative",
              transition: "all 0.25s ease",
              transform: clickedLink === text ? "scale(1.15)" : "scale(1)",
            })}
          >
            {text}
            {/* Hover underline */}
            <span
              style={{
                position: "absolute",
                bottom: -4,
                left: 0,
                width: "100%",
                height: 2,
                backgroundColor: "#00f0ff",
                transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.3s ease",
              }}
              className="underline"
            />
          </NavLink>
        ))}
      </div>

      <style>
        {`
          nav a:hover .underline {
            transform: scaleX(1);
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
