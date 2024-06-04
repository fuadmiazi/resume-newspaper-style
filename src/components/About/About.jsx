import React from 'react'
import './About.css'
import image from '../../assets/pic.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className="left-col">
        <h1 className='resume'>ABOUT</h1>
        <div className="title">
            <p>Front End Developer</p>
            <p>Fuad Hasan</p>
        </div>
        <p className='detail-about'>I am a guy who loves to code and make wonderfull applications. I Love to take challenges and open to learn new things with quick adaptation. </p>
      </div>

      <div className="right-col">
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default About
