import { NavLink } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav
      style={{
        width: "100%",
        height: "70px",
        backgroundImage: "url('https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f')",
        backgroundSize: "cover",
        backgroundPosition: "center",
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
        backdropFilter: "blur(2px)",
      }}
    >
      <h2 style={{ margin: 0 }}>Mobile Shop</h2>

      <div style={{ display: "flex", gap: "30px", fontSize: "18px" }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#00eaff" : "#fff",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          style={({ isActive }) => ({
            color: isActive ? "#00eaff" : "#fff",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Products
        </NavLink>

        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            color: isActive ? "#00eaff" : "#fff",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Contact
        </NavLink>

        <NavLink
          to="/cart"
          style={({ isActive }) => ({
            color: isActive ? "#00eaff" : "#fff",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Cart ({cartCount})
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
