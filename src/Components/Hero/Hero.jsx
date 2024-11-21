import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
<img src={profile_img} alt="" />
<h1><span>I'm Prathishtha,</span> Frontend Developer.</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusantium iusto amet quae vel animi eveniet voluptates consectetur nostrum est, doloribus veniam deserunt eius saepe enim impedit culpa minus magnam!</p>
<div className="hero-action">
  <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
  <div className="hero-resume">My resume</div>
</div>
    </div>
  )
}

export default Hero