import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About me</h1>
            <img src={theme_pattern} />
        </div>
        <div className='about-section'>
            <div className='about-left'>
                <img src={about_profile.svg} />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced Frontend Developer</p>
                    <p>My passion for Frontend development can be seen in each project</p>
                </div>
                <div className='about-skills'>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "75%"}}></hr></div>
                    <div className="about-skill"><p>REACT JS</p><hr style={{width: "60%"}}></hr></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: "70%"}}></hr></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width: "50%"}}></hr></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+ </h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>6+ </h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default About