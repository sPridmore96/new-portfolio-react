import React, { useState } from 'react';
import './NavBar.scss';
import menuIcon from '../../assets/icons/imagesmenu.png';
import codeEndTag from '../../assets/icons/CodeEndTag.png';
import NavDropDown from '../NavDropDown/NavDropDown';

const NavBar = () => {
  const [ dropDown, setDropDown ] = useState('none');


  const displayNav = () => {

    if(dropDown === 'none'){
      setDropDown("block")
    } else if (dropDown === 'block') {
      setDropDown('none')
    }
  }


  const homeNavJSX = (
    <>
    <div className="navBar">
      <img className="navBar__icon" src={codeEndTag} alt="code end tag" />
      <h2>Sam Pridmore</h2>
        <img onClick={displayNav} className="navBar__icon" src={menuIcon} alt="menu icon" />
    </div>
    <div  className='navBar__drop-down' style={{display:dropDown}}>
    <NavDropDown displayNav={displayNav}/>
    </div>
    </>
  );


  return homeNavJSX;
};

export default NavBar;
