import './Intro.css'
import bg from '../../assets/bg2.png'
import { Link } from 'react-router-dom'

import React from 'react'

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro-content">
        <span className='hello'>Hello,</span>
        <span className='text1'>I'm Roohi</span>
        <span className='text2'>Coder, Designer, Explorer</span>
        <p className='text3'>Driven Computer Science graduate with a knack for finding creative solutions and a love for all things tech. Proficient in <span className='yellow'>MERN stack development, JavaScript, TypeScript, Firebase, MongoDB, React, Express, and Node.js.</span> Known for my strong communication skills and dedication to delivering high-quality work on time.</p>
        <p className='text3'>I thrive in dynamic, fast-paced environments where challenges spark innovation and disruptions lead to new beginnings.</p>
        
        <Link to="/resume">
        <button className='btnHire'>Hire Me</button>
        </Link>
        
      </div>
      <img src={bg} alt="profile" className='bg'/>
    </section>
  )
}

export default Intro
