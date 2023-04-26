import React from "react";

function Cardppopup(props) {
  return (
    <div className="pop-up-back">
      <div className="product-pop-up" onBlur={props.onBlur}>
        <div className="product-pop-up-image">
          <img src={props.src} alt={props.alt} width="100%" height="100%" />
        </div>
        <div className="product-pop-up-desc">
          <h2>{props.title}</h2>
          <p>{props.price}</p>
          <div>
            
          </div>
        </div>
        <button className="product-pop-up-close-button" onClick={props.onClick}>
          x
        </button>
      </div>
    </div>
  );
}

export default Cardppopup;