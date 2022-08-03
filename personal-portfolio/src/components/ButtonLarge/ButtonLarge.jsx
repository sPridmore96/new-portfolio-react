import React from 'react'
import "./ButtonLarge.scss"

const ButtonLarge = ({buttonText, buttonImg, buttonLink}) => {
    return (
        <a target="_blank" href={buttonLink} className='largeButton-container'>
            <button className='largeButton-container__button'>
                {buttonText}
                <img className='largeButton-container__img' src={buttonImg} alt={buttonText} />
            </button>
        </a>
    )
}

export default ButtonLarge