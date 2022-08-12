import React from 'react';
import './AboutMe.scss';
import myPhoto from "../../assets/images/MyPhoto.png"


const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 className="about-me__header">About Me</h2>
        <img className='about-me__photo' src={myPhoto} alt="" />
      <br />
      <div className="about-me__content">
        <h3 className="about-me__sub-header">Transferable Skills :</h3>
        <br />
        <h3 className="about-me__content-header">Teamwork:</h3>
        <p className='about-me__paras'>
          I am a reliable team member who shares knowledge with the
          understanding that a whole team being upskilled is preferable to one
          person. You are only as good as the last person in your team. Good
          organization I have good organizational skills, dealing with a high
          volume of orders in a high pressured environment with multiple
          deadlines.
        </p>
        <h3 className="about-me__content-header">Learning ability:</h3>
        <p className='about-me__paras'>
          I'm a quick learner who picks up systems and processes with minimal
          training, with any task I dive in head first to solve problems we
          encounter. I always look for improvement within processes and if there
          is anything I can learn to create more efficient methods which I share
          with colleagues.
        </p>
        <h3 className="about-me__content-header">Leadership skills:</h3>
        <p className='about-me__paras'>
          I am a confident and approachable team leader, I listen, support and
          feedback in a positive manor to encourage my team to be the best that
          they can be.
        </p>
        <h3 className="about-me__content-header">Leisure and Interests:</h3>
        <p className='about-me__paras'>
          Spending time with my family and friends. The occasional round of
          golf, unfortunately not a competitive level yet. When relaxing, I
          enjoy music, films and always have a book to read.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
