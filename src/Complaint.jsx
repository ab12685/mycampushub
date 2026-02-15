import { useState } from "react";

export default function Complaint() {
  const [name, setName] = useState("");
  const [issue, setIssue] = useState("");

  const handleSubmit = () => {
    if (!name || !issue) {
      alert("Fill all fields");
      return;
    }

    alert("Complaint Registered ✅");
    setName("");
    setIssue("");
  };

  return (
    <div className="page">
      <h2>Register Complaint</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Describe Issue"
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit Complaint</button>
    </div>
  );
}
