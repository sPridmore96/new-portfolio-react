import React from 'react'
import "./Footer.scss"
import gitHubIcon from "../../assets/icons/gitHubIcon.svg"
import indeedIcon from "../../assets/icons/indeed.svg"
import CVIcon from "../../assets/icons/CVIcon.svg"


const Footer = () => {
  return (
    <div className='footer'>
        <div>
        <img src={gitHubIcon} alt="" className="footer__icon" />
        <img src={indeedIcon} alt="" className="footer__icon" />
        <img src={CVIcon} alt="" className="footer__icon" />
        </div>
        <h3 className='footer__email'>Spridmore96@gmail.com</h3>
    </div>
  )
}

export default Footer