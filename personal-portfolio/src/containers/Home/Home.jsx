import React from 'react'
import "./Home.scss"
import Card from '../../components/Card/Card'

const Home = ({projectData}) => {
  return (
    <div><Card projectData={projectData} /></div>
  )
}

export default Home