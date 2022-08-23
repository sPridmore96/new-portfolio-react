import React from 'react'
import "./NavDropDown.scss"
import whiteCross from "../../assets/icons/WhiteCross.png"
import {Link} from "react-router-dom"


const NavDropDown = ({displayNav}) => {
  return (
        <div className='list'>
            <img onClick={displayNav} className='list__cross' src={whiteCross} alt="" />
            <Link to={"/Contact-me"} className='list__item'>Contact me</Link>
            <a href='https://github.com/sPridmore96' target="_blank" className='list__item'>GIT Hub Profile</a>
            {/* <a href='#' className='list__item'>About me</a> */}
        </div>
  )
}

export default NavDropDown