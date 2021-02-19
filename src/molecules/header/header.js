import React from "react";
import "./header.scss";
import logoImage from "../../assets/logo/logo.png";
import searchSvg from "../../assets/svg/iconfinder.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img alt="discovery" className="discovery" src={logoImage} />
      </div>
      <div className="header-right">
        <div className="">Home</div>
        <div className="">Explore</div>
        <div className="">Shorts</div>
        <div className="">Mindblow</div>
        <div className="">Premium</div>
      </div>
      <div className="search-container">
        <input
          className="search"
          type="text"
          maxlength="100"
          placeholder="Search for show, episode or shorts"
          name="search"
        />
        <img className="searchSvg" alt="searchSvg" src={searchSvg} />
      </div>
    </div>
  );
};

export default Header;
