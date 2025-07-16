import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Feedback() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/feedback", {
        feedback,
      });
      alert("✅ Feedback submitted successfully!");
      setFeedback("");
    } catch (err) {
      alert("❌ Failed to submit feedback");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
        padding: "20px",
      }}
    >
      <div className="card shadow-lg p-4 rounded" style={{ width: "100%", maxWidth: "500px" }}>
        <h3 className="text-center text-danger fw-bold mb-4">Your Feedback</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Write your feedback</label>
            <textarea
              className="form-control"
              rows="5"
              placeholder="Your thoughts, suggestions, or comments..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-danger w-100 fw-bold">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
