import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Home/Home.jsx'
import projectData from "../../assets/Data/ProjectInfo/ProjectInfo"

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
    </Router>
  )
}

export default Routing