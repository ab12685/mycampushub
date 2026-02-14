import React from "react";

const features = [
     {
    title: "Event Discovery",
    desc: "Browse and discover exciting campus events tailored to your interests and schedule"
  },
  {
    title: "Instant Registration",
    desc: "Register for events with a single click and get instant confirmation"
  },
  {
    title: "Community Connect",
    desc: "Connect with peers and campus network through events"
  },
  {
    title: "Track Participation",
    desc: "Track event history and attendance to build your campus profile"
  }
];

const Features = () => {
  return (
    <section style={{ padding: "60px 0" }}>
      <div className="container">

        <h2 style={{ textAlign: "center", fontSize: "36px" }}>
          Why Choose CollegeHub?
        </h2>

        <div style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px"
        }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
            }}>
              <h3>{f.title}</h3>
              <p style={{ color: "#64748b", marginTop: "10px" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
