import React from "react";
import { Button } from "./Button";
import '../App.css';
import './Showcase.css';

function Showcase() {
  return (
    <div className="showcase-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>I am Youdas</h1>
      <p>Welcome to my website</p>
      <div className="showcase-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Simplified Website View
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WHO I AM
        </Button>
      </div>
    </div>
  );
}

export default Showcase;
