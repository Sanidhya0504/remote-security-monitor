import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <div className="head text-center hero-container">
      <div className="sub-head text-center bg-dark text-white bg-opacity-50 p-3">
        <h1>Remote Security Monitor</h1>
        <p>Turn Your Old Phone Into a Security Camera</p>
      </div>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          <Link className="text-decoration-none text-light" to="/sign-in">
            Sign-in
          </Link>
        </Button>
        <Button
          className="btns "
          buttonStyle="btn--primary"
          buttonSize="btn--large-dark"
        >
          <Link className="text-decoration-none text-dark" to="/sign-up">
            Sign-up
          </Link>
          <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
