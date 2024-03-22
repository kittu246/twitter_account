import React from "react";
import twitterLogo from "../../assets/twitterLogo.png";
import { Link } from "react-router-dom";
import "./style.css";

const Login = () => {
  return (
    <section>
      <div className="userAuth">
        <img src={twitterLogo} alt="twitterLogo" />
        <h1>Log in to Twitter</h1>
        <input type="text" placeholder="Phone number, email address" />
        <input type="password" placeholder="password" />
        <button>Log In</button>
        <div className="userAuthLink">
          <Link>Forget Password</Link>
          <Link to="/signUp">Sign Up to Twitter</Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
