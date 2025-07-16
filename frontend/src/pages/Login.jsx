import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      alert("✅ Login successful!");
      navigate("/feedback");
    } catch (err) {
      alert("❌ Invalid credentials!");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #c2e9fb, #a1c4fd)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="card shadow-lg p-4 rounded" style={{ width: "100%", maxWidth: "400px" }}>
        
        {/* Multicolored Login Heading */}
        <h3
          className="text-center fw-bold mb-4"
          style={{
            background: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "2rem",
          }}
        >
          Login
        </h3>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Login
          </button>
        </form>

        {/* 🔗 Link to Register page */}
        <p className="text-center mt-3">
          Don’t have an account?{" "}
          <Link to="/register" className="text-decoration-none text-primary fw-bold">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
