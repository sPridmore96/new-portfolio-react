import React from 'react'
import "./NavDropDown.scss"
import whiteCross from "../../assets/icons/WhiteCross.png"


const NavDropDown = ({displayNav}) => {
  return (
        <div className='list'>
            <img onClick={displayNav} className='list__cross' src={whiteCross} alt="" />
            <a href='#' className='list__item'>Contact me</a>
            <a href='https://github.com/sPridmore96' target="_blank" className='list__item'>GIT Hub Profile</a>
            <a href='#' className='list__item'>About me</a>
        </div>
  )
}

export default NavDropDown