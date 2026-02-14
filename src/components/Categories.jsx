import React from "react";
import heroImg from "../assets/images/hero.jpeg";

const categories = [
  " Technical",
  " Cultural",
  " Sports",
  " Workshop",
  " Hackathon",
  " Seminar"
];

const Categories = () => {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container">

        <div
  style={{
    marginBottom: "50px",
    display: "flex",
    justifyContent: "center"
  }}
>
  <img
    src={heroImg}
    alt="Hero"
    style={{
      width: "100%",
      maxWidth: "10000px",
      borderRadius: "20px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.1)"
    }}
  />
</div>

        <h2 style={{ textAlign: "center", fontSize: "36px" }}>
          Event Categories
        </h2>

        <p style={{
          textAlign: "center",
          color: "#64748b",
          marginTop: "10px"
        }}>
          Explore diverse events across campus
        </p>

        <div style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "20px"
        }}>
          {categories.map((cat, i) => (
            <div key={i} style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              textAlign: "center",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
            }}>
              <h3>{cat}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;
