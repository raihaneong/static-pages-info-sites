import React from "react";

import Logo from "../images/react-icon.png"

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={Logo} className="img"/>
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  );
}
