import React from "react";
import kgf from '../../assets/image/kgf.jpg';
import master from '../../assets/image/master.jpg';
import pogaru from '../../assets/image/pogaru.webp';

const Carosel = () => {
  return (
    <div className="container">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" style={{ height: "500px", borderRadius: "15px" }}>
          <div className="item active">
            <img src={kgf} alt="pogaru"  />
          </div>

          <div className="item">
            <img src={pogaru} alt="kgf" />
          </div>

          <div className="item">
            <img src={master} alt="master" />
          </div>
        </div>

        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carosel;