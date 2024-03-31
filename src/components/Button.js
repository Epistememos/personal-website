import React from 'react';
import "./Button.css";

function Button(props) {
  const handleClick = () => {
    if (props.newWindow) {
      window.open(props.path, '_blank');
    } else {
      window.location.href = props.path;
    }
  };
  return (
    <div>
      <button
        className="btn btn-shadow btn-shadow--black"
        onClick={handleClick}
      >
        <span>{props.name}</span>
      </button>
    </div>
  );
}

export default Button;
