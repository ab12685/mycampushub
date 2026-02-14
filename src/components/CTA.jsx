import React from "react";

const CTA = () => {
  return (
    <section style={{
      padding: "80px 0",
      background: "linear-gradient(135deg,#7c3aed,#9333ea)",
      color: "white",
      textAlign: "center"
    }}>
      <div className="container">
        <h2 style={{ fontSize: "40px" }}>
          Ready to get started?
        </h2>

        <p style={{ marginTop: "15px" }}>
          Join thousands of students making the most of their college experience
        </p>

        <button style={{
          marginTop: "40px",
          padding: "16px 30px",
          borderRadius: "30px",
          border: "none",
          fontWeight: "600"
        }}>
          Get Started Now →
        </button>

      </div>
    </section>
  );
};

export default CTA;
