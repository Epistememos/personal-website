import React from 'react';
import "./Popup.css"

function Popup(props) {
    //if triggered, returns the block, if not, an empty string
  

    return (props.trigger) ? (
    <div className='popup'>
        <div className="popup-inner">
            <button onClick={() => props.setTrigger(false)}>Close</button>
            {props.children}
        </div>
      
    </div>
  ) : "";
}

export default Popup
