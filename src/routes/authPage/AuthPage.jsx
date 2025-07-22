import { useState } from "react";
import IKImage from "../../components/ikimage/IKImage";
import "./authPage.css";

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div className="authPage">
      <div className="authContainer">
        <IKImage className="logo" src="/general/logo.png" alt="Logo" />
        <h1>{isRegistering ? "Create a Account" : "Login Your account"}</h1>
        {isRegistering ? (
          <form>
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
            <button type="submit">Login</button>
            <i>
              Already have an account?{" "}
              <b onClick={() => setIsRegistering(false)}>LogIn</b>
            </i>
          </form>
        ) : (
          <form action="">
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
