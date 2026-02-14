import React from "react";

const Hero = () => {
  return (
    <section
      style={{
    minHeight: "50vh",
    padding: "60px 0 20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }}
>
      <div style={{ maxWidth: "900px", padding: "0 20px" }}>

        <p
          style={{
            background: "#d9f99d",
            display: "inline-block",
            padding: "8px 18px",
            borderRadius: "20px",
            marginBottom: "20px"
          }}
        >
          ✨ Welcome to CollegeHub Events
        </p>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "800",
            lineHeight: "1.2"
          }}
        >
          Your Campus, <br />
          <span
            style={{
              background: "linear-gradient(135deg,#7c3aed,#9333ea)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Your Events
          </span>
        </h1>

        <p
          style={{
            marginTop: "20px",
            color: "#64748b",
            maxWidth: "600px",
            marginInline: "auto"
          }}
        >
          Discover, register, and participate in amazing college events.
          Connect with your campus community.
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap"
          }}
        >
          <button
            style={{
              background: "linear-gradient(135deg,#7c3aed,#9333ea)",
              color: "white",
              border: "none",
              padding: "14px 28px",
              borderRadius: "30px",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            Get Started Free →
          </button>

          <button
            style={{
              border: "2px solid #cbd5e1",
              padding: "14px 28px",
              borderRadius: "30px",
              background: "white",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;