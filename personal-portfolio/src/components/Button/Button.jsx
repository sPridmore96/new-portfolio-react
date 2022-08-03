import React from 'react'
import "./Button.scss"

const Button = ({ buttonText, buttonImg, buttonLink }) => {
    return (
        <a href={buttonLink} className='button-container'>
            <button className='button-container__button'>
                {buttonText}
                <img className='button-container__img' src={buttonImg} alt={buttonText} />
            </button>
        </a>
    )
}

export default Button