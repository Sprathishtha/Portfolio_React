import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />   
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, placeat laudantium vel tempora voluptates laboriosam totam? Maxime pariatur soluta magnam! Eos quae natus odio? Error porro perspiciatis ipsa ad eaque.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde natus aliquam blanditiis ullam laudantium vel quae consequatur ab ipsa dolore. Commodi facilis harum consequuntur vero sit sunt. Vitae, veritatis deleniti.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:"50%"}}/>                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div><hr />
            <div className="about-achievement">
                <h1>20+</h1>
                <p>PROJECT COMPLETED</p>
            </div><hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div><hr />
        </div>
    </div>
  )
}

export default About