import React from 'react';
import "./Button.css";

function Button(props) {
  return (
    <div>
      <button
      className="btn btn-shadow btn-shadow--black"
      onClick={() => window.open(props.path, '_blank')}>
      <span>{props.name}</span>
      </button>
    </div>
  )
}

export default Button;
