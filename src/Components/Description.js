import React from "react";
import { Button } from "./Button";
import '../App.css';
import './description.css';

function Description() {
  return (
    <div className="description-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>I am Youdas</h1>
      <p>Welcome to my website</p>
      <div className="description-btns">
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
          WHO I AM  <i className=''
        </Button>
      </div>
    </div>
  );
}

export default Description;
