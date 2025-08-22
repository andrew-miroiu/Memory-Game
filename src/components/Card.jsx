import React from "react";

function Card({ image, name, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-name">
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Card;
