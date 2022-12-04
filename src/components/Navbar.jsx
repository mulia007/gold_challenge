import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <h1>
      <button></button>
      <Link to="/">HomePage</Link>
      <button></button>
      <Link to="/carimobil">CariMobil</Link>
    </h1>
  );
};

export default Navbar;
