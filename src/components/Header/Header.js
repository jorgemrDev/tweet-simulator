import React from "react";
import "./Header.scss";
import TwitterLogo from "../../assets/img/twitter-logo.png";

export default function Header() {
  return (
    <div className="header">
      <img src={TwitterLogo} alt="tweets Simulator" />
      <h1> Twitter sin Trump </h1>
    </div>
  );
}
