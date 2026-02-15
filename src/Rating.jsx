import { useState } from "react";

export default function Rating() {
  const [rating, setRating] = useState("");

  const handleSubmit = () => {
    if (!rating) {
      alert("Please select rating");
      return;
    }

    alert("Thank you for rating ⭐");
    setRating("");
  };

  return (
    <div className="page">
      <h2>Event Rating</h2>

      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="">Select Rating</option>
        <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
        <option value="4">⭐⭐⭐⭐ Good</option>
        <option value="3">⭐⭐⭐ Average</option>
        <option value="2">⭐⭐ Poor</option>
        <option value="1">⭐ Very Bad</option>
      </select>

      <button onClick={handleSubmit}>Submit Rating</button>
    </div>
  );
}
