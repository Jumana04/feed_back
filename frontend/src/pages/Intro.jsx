import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(to right, #00c6ff, #0072ff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          background: "linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "30px",
        }}
      >
        Welcome to Feedback Portal
      </h1>

      <button
        className="btn btn-light fw-bold"
        style={{ fontSize: "1.2rem", padding: "10px 30px", borderRadius: "10px" }}
        onClick={() => navigate("/login")}
      >
        Get Started →
      </button>
    </div>
  );
}
