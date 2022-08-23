import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home.jsx";
import projectData from "../../assets/Data/ProjectInfo/ProjectInfo";
import skillTreeIcons from "../../assets/Data/SkillsIconData/SkillsIconData.js";
import ContactMe from "../ContactMe/ContactMe.jsx";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/new-portfolio-react/"
          element={
            <Home skillTreeIcons={skillTreeIcons} projectData={projectData} />
          }
        />
        <Route 
        path="/Contact-me"
        element={<ContactMe />}
        />
      </Routes>
    </Router>
  );
};

export default Routing;
