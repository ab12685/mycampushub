import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "white",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
      }}
    >
      <h2>📅 CollegeHub</h2>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <span>Login</span>
        <button
          style={{
            background: "linear-gradient(135deg,#7c3aed,#9333ea)",
            color: "white",
            border: "none",
            padding: "10px 22px",
            borderRadius: "25px",
            cursor: "pointer"
          }}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;