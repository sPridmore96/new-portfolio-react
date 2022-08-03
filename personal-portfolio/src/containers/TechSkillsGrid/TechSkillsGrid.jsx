import React from 'react'
import SkillsIcons from '../../components/SkillsIcons/SkillsIcons'
import "./TechSkillsGrid.scss"

const TechSkillsGrid = ({skillTreeIcons}) => {
  return (<div className='skillsTreeGrid'>
      <h2 className='skillsTreeGrid__header'>Technical Skills</h2>
    <div className='skillsTreeGrid__container'>
        <SkillsIcons skillTreeIcons={skillTreeIcons}/>
    </div>
    </div>
  )
}

export default TechSkillsGrid