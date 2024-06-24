import React from 'react'
import './Hero.css';
import shubh_img from "../../assets/DP.jpg"
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <img src={shubh_img} alt="" />
        <h1><span>I'm Shubh,</span> frontend developer based in India.</h1>
        <p>I had completed my Master's in Computer Application from Chandigarh University.</p>
        <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link'offset={50} href='#contact'>Connect With Me</AnchorLink></div>
          <div className="hero-resume">My Resume</div>
          </div>
    </div>
  )
}

export default Hero
