import React from "react";
import Button from "../Button/Button";
import "./Card.scss";
import eyeIcon from "../../assets/icons/eyeIcon.webp";
import codeEndTag from "../../assets/icons/CodeEndTag.png";
import Carousel from "../Carousel/Carousel";

const Card = ({ projectData }) => {
  const cardJSX = projectData.map((project, index) => {
    const { title, subHeadings, overview, images, linkCode, linkLiveSite } =
      project;
    return (
      <div key={index} className="card">
        <div className="card__image-container">
          <Carousel imgArr={images}/>
        </div>
        <div className="card__content">
          <div className="card__subHeadings">
            {subHeadings.map((subHead, index) => (
              <p key={index}>{subHead}</p>
            ))}
          </div>
          <h2 className="card__title">{title}</h2>
          <div className="card__overview">{overview}</div>
          <div className="card__buttons">
            <Button
              buttonText={"Code"}
              buttonImg={codeEndTag}
              buttonLink={linkCode}
            />
            <Button
              buttonText={"Preview"}
              buttonImg={eyeIcon}
              buttonLink={linkLiveSite}
            />
          </div>
        </div>
      </div>
    );
  });
  return <>{cardJSX}</>;
};

export default Card;
