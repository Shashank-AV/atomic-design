import React from "react";
import small from "../../assets/image/smallImage.jpg";
import "./card.scss";

const Card = ({title}) => {
  return (
    <div className="smallContainer">
    <div className="row">
      <div className="row">
        <h4 className="title">{title}</h4>
        <h4 className="viewall">View All</h4>
      </div>
      <div className="column">
        <div className="card">
          <img src={small} alt="columnImage" className="cardImage"/>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src={small} alt="columnImage" className="cardImage"/>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src={small} alt="columnImage" className="cardImage"/>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src={small} alt="columnImage" className="cardImage"/>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src={small} alt="columnImage" className="cardImage"/>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src={small} alt="columnImage" className="cardImage"/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
