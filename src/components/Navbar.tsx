import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>PPS</div>
      <div style={{ display: "flex", gap: "15px" }}>
        <a href="#home" style={{ textDecoration: "none", color: "black" }}>
          Home
        </a>
        <a href="#about" style={{ textDecoration: "none", color: "black" }}>
          About
        </a>
        <a href="#services" style={{ textDecoration: "none", color: "black" }}>
          Services
        </a>
        <a href="#contact" style={{ textDecoration: "none", color: "black" }}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
