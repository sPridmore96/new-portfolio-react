import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home.jsx";
import projectData from "../../assets/Data/ProjectInfo/ProjectInfo";
import skillTreeIcons from "../../assets/Data/SkillsIconData/SkillsIconData.js";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home skillTreeIcons={skillTreeIcons} projectData={projectData} />
          }
        />
      </Routes>
    </Router>
  );
};

export default Routing;
