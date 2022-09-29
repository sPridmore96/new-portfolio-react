import React from 'react'
import "./Carousel.scss"


const Carousel = ({imgArr}) => {
  return (
<section className="slider">
  <ul className="slider__container" id="slides-container">
  {imgArr.map((image, index) => {
    return(
    <li key={index} className=''><img className='slider__img' src={image} alt="" /></li>
    )
  })}
 </ul>
   </section>
  )
}

export default Carousel