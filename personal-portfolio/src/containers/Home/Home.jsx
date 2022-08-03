import React from 'react'
import "./Home.scss"
import Card from '../../components/Card/Card'
import TechSkillsGrid from '../TechSkillsGrid/TechSkillsGrid'

const Home = ({projectData, skillTreeIcons}) => {
  return (<>
    <div><TechSkillsGrid skillTreeIcons={skillTreeIcons} /></div>
    <div><Card projectData={projectData} /></div>
    </>)
}

export default Home