import React from "react";
import "./NavBar.scss";
import menuIcon from "../../assets/icons/imagesmenu.png"
import codeEndTag from "../../assets/icons/CodeEndTag.png"

const NavBar = () => {
  return (
    <div>
      <img src={codeEndTag} alt="code end tag"/>
      <h2>Sam Pridmore</h2>
      <a href="">
        <img src={menuIcon} alt="menu icon"/>
      </a>
    </div>
  );
};

export default NavBar;
