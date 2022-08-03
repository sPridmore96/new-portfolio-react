import React from "react";
import "./Home.scss";
import Card from "../../components/Card/Card";
import TechSkillsGrid from "../TechSkillsGrid/TechSkillsGrid";
import ButtonLarge from "../../components/ButtonLarge/ButtonLarge";
import downArrow from "../../assets/icons/Down_Arrow_Icon.png"
import NavBar from "../../components/NavBar/NavBar";

const Home = ({ projectData, skillTreeIcons }) => {
  return (
    <div className="home">
    <NavBar/>
    <p className="home__welcome">Hi! I'm Sam Pridmore</p>
    <h2 className="home__discription">A Junior Software Developer Based In The UK.</h2>
      <ButtonLarge buttonImg={downArrow} buttonText={"Take a look at my work"}/>
      <div>
        <TechSkillsGrid skillTreeIcons={skillTreeIcons} />
      </div>
      <div>
        <Card projectData={projectData} />
      </div>
    </div>
  );
};

export default Home;
