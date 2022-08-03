import React from "react";
import Button from "../Button/Button";
import "./Card.scss";
import eyeIcon from "../../assets/icons/eyeIcon.webp";
import codeEndTag from "../../assets/icons/CodeEndTag.png"

const Card = ({ projectData }) => {
  const cardJSX = projectData.map((project, index) => {
    const { title, subHeadings, overview, image, linkCode, linkLiveSite } =
      project;
    return (
      <div key={index} className="card">
        <div className="card__image-container">
          <img className="card__image" src={image} alt={title} />
        </div>
        <div className="card__content">
          <div className="card__subHeadings">
            {subHeadings.map((subHead, index) => (
                <p key={index}>{subHead}</p>
                ))}
          </div>
                <h2>{title}</h2>
          <div className="card__overview">{overview}</div>
          <div className="card__buttons">
          <Button buttonText={"Code"} buttonImg={codeEndTag} buttonLink={linkCode} />
          <Button buttonText={"Preview"} buttonImg={eyeIcon} buttonLink={linkLiveSite}/>
          </div>
        </div>
      </div>
    );
  });

  return <>{cardJSX}</>;
};

export default Card;
