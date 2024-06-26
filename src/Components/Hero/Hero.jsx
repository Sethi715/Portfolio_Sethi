import React from 'react'
import './Hero.css'
import pp from '../../assets/pp.svg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={pp} />
        <h1> I'm <span>Tejasv Sethi</span>, Frontend Developer Based in Delhi-NCR.</h1>
        <p>I am Frontend Developer from Faridabad with 2 years of experience.</p>
        <div className='hero-action'>
          <div  className="hero-connect" onClick={() => window.location.href = '#contact'}>Connect with Me
          </div>
          <div className="hero-resume" onClick={() => window.location.href = 'https://drive.google.com/file/d/17pA83CGQe0HHPQLy30FoNjtM1uSu6zRL/view?usp=drive_link'}>
  My resume
</div>
        </div>
    </div>
  )
}

export default Hero
