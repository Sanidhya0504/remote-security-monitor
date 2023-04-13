import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="text-center hero-container">
      <h1>Remote Security Monitor</h1>
      <p>Turn Your Old Phone Into a Security Camera</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          <a className="text-decoration-none text-light" href="/sign-in">
            Sign-in
          </a>
        </Button>
        <Button
          className="btns "
          buttonStyle="btn--primary"
          buttonSize="btn--large-dark"
        >
          <a className="text-decoration-none text-dark" href="/sign-up">
            Sign-up
          </a>

          <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
