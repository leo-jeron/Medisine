import { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom"; 


export default function Auth() {
  const [activeTab, setActiveTab] = useState("login");

  // Form states
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");

  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");

  // Handle Login
const handleLogin = (e) => {
  e.preventDefault();

  if (!loginEmail || !loginPass) {
    setLoginError("All fields required!");
    return;
  }

  setLoginError("");
  navigate("/dashboard"); // SUCCESS → GO TO DASHBOARD
};

 

  // Handle Register
  const handleRegister = (e) => {
    e.preventDefault();

    if (!regName || !regEmail || !regPass) {
      setRegisterError("Please fill everything!");
      return;
    }

    setRegisterError("");
    alert("Registration Successful!");
  };

  return (
    <div className="auth-wrapper">
      <div className="card">

        {/* LOGO */}
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3209/3209993.png"
            alt="Medical Logo"
          />
        </div>

        <div className="title">Medical Portal</div>

        {/* TABS */}
        <div className="tabs">
          <div
            className={`tab ${activeTab === "login" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </div>

          <div
            className={`tab ${activeTab === "register" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </div>
        </div>

        {/* LOGIN FORM */}
        {activeTab === "login" && (
          <form className="active" onSubmit={handleLogin}>
            <p className="error">{loginError}</p>

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={loginPass}
              onChange={(e) => setLoginPass(e.target.value)}
            />

            <button type="submit">Login</button>
          </form>
        )}

        {/* REGISTER FORM */}
        {activeTab === "register" && (
          <form className="active" onSubmit={handleRegister}>
            <p className="error">{registerError}</p>

            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={regName}
              onChange={(e) => setRegName(e.target.value)}
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Create password"
              value={regPass}
              onChange={(e) => setRegPass(e.target.value)}
            />

            <button type="submit">Register</button>
          </form>
        )}
      </div>
    </div>
  );
}
