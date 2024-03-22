import React from "react";
import "./style.css";
import TwitterHero from "../../assets/twitterHero.png";
import TwitterLogo from "../../assets/twitterLogo.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Login from "../login/Login";

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <div className="homeLeft">
          <img src={TwitterHero} alt="twitterHero" />
        </div>
        <div className="homeRight">
          <img src={TwitterLogo} alt="twitterLogo" />
          <h1>Happening Now</h1>
          <h2>Join Twitter Today</h2>
          <button>
            <Link>
              <FcGoogle /> Sign up with Google
            </Link>
          </button>
          <button>
            <Link>
              <FaApple /> Sign up with Apple
            </Link>
          </button>

          <button>
            <Link to='/signUp'>Sign up with phone and email</Link>
          </button>

          <p>
            By singing up you agree to the <span>Terms of Service</span> and{" "}
            <span>Privacy Policy</span>, including <span>Cookie Use</span>.
          </p>
          <p>
            Already have an account? <Link to='/login'>Log in</Link>
          </p>
        </div>
      </div>
      <footer>
        <Link>About</Link>
        <Link>Help Center</Link>
        <Link>Terms of Service</Link>
        <Link>Privacy Policy</Link>
        <Link>Blogs</Link>
        <Link>Storage</Link>
        <Link>Storage</Link>
        <Link>Storage</Link>
        <Link>Storage</Link>
        <Link>Storage</Link>
        <Link>Storage</Link>
        <Link>Storage</Link>
        <Link>Storage</Link>
        <Link>@ 2018 Twitter.Inc</Link>
      </footer>
    </section>
  );
};

export default Home;
