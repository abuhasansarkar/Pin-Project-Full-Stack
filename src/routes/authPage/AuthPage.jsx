import { useState } from "react";
import IKImage from "../../components/ikimage/IKImage";
import "./authPage.css";
import apiRequest from "../../utils/apiRequest";
import { useNavigate } from "react-router";

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // Register Function
  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    try {
      const res = await apiRequest.post("/users/register", data);
      if (res.data) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Login Function
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    try {
      const res = await apiRequest.post("/users/login", data);
      console.log(res);
      if (res.data) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="authPage">
      <div className="authContainer">
        <IKImage className="logo" src="/general/logo.png" alt="Logo" />
        <h1>{isRegistering ? "Create a Account" : "Login Your account"}</h1>
        {isRegistering ? (
          // Register Form
          <form onSubmit={handleRegister}>
            <div className="inputGroup">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="inputGroup">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="inputGroup">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="inputGroup">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Register</button>
            <i>
              Already have an account?{" "}
              <b onClick={() => setIsRegistering(false)}>LogIn</b>
            </i>
          </form>
        ) : (
          // LogIn Form
          <form onSubmit={handleLogin}>
            <div className="inputGroup">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="inputGroup">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
            <i>
              Don&apos;t have an account?{" "}
              <b onClick={() => setIsRegistering(true)}>Register</b>
            </i>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
