import React, { useState, useEffect } from 'react';
import './Carousel.scss';
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';

const Carousel = ({ imgArr }) => {
  const [carouselJSX, setCarouselJSX] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleButtonClick = (event) => {
    if (event.target.id === 'button-left') {
      if (counter === 0) {
        setCounter(imgArr.length - 1);
      } else {
        setCounter(counter - 1);
      }
    } else {
      if (counter === imgArr.length - 1) {
        setCounter(0);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  const handleCarousel = () => {
    if (imgArr.length === 1) {
      setCarouselJSX([
        <li key={1} className="">
          <img className="slider__img" src={imgArr[0]} alt="" />
        </li>,
      ]);
    } else {
      setCarouselJSX(
        imgArr.map((eachImg, index) => (
          <li key={index} className="">
            <img className="slider__img" src={eachImg} alt="" />
          </li>
        ))
      );
    }
  };

  useEffect(() => {
    handleCarousel();
  }, []);

  return (
    <section className="slider">
      <button
        id="button-left"
        className={carouselJSX.length === 1 ? "slider__button--hidden" : "slider__button"}
        onClick={handleButtonClick}
      >
        <BiChevronLeftCircle className='slider__button--img' id="button-left" />
      </button>
      <ul className="slider__container" id="slides-container">
        {carouselJSX[counter]}
      </ul>
      <button
        id="button-right"
        className={carouselJSX.length === 1 ? "slider__button--hidden" : "slider__button"}
        onClick={handleButtonClick}
      >
        <BiChevronRightCircle className='slider__button--img' id="button-right" />
      </button>
    </section>
  );
};

export default Carousel;
