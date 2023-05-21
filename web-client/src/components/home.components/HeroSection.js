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
        <Link className="text-decoration-none text-light" to="/sign-in">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Sign-in
          </Button>
        </Link>
        <Link className="text-decoration-none text-dark" to="/sign-up">
          <Button
            className="btns "
            buttonStyle="btn--primary"
            buttonSize="btn--large-dark"
          >
            Sign-up
            <i className="far fa-play-circle" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
