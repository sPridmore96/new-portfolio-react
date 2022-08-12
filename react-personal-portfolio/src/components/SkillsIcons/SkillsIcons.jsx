import React from "react";
import "./SkillsIcons.scss";

const SkillsIcons = ({ skillTreeIcons }) => {
  const iconJSX = skillTreeIcons.map((icon, index) => {
    return (
      <div className="icon-card" key={index}>
        <a href="">
          <img src={icon.image} alt="" />
        </a>
        <h2 className="">{icon.title}</h2>
      </div>
    );
  });
  return <>
  {iconJSX}
  </>;
};

export default SkillsIcons;
