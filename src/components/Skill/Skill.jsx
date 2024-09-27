import React from 'react'
import './Skill.css'
import webDesign from '../../assets/web-design.png'
import creativeWriting from '../../assets/creative-writing.png'
import prog from '../../assets/prog.png'

const Skill = () => {
  return (
    <section id='skills'>
        <span className="title">What I do</span>
        <p className='desc'>Driven by curiosity and a love for problem-solving, I take pride in crafting thoughtful, efficient solutions. I approach every challenge with a blend of technical depth and creative insight</p>

        <div className='skillBar'>
            <img src={webDesign} alt="Web Design" className='skillImg'/>
            <div className="text">
                <h2>Front-End Development</h2>
                <p>Skilled in front-end web development, creating responsive and dynamic user interfaces with modern frameworks like React.</p>
            </div>

        </div>
        <div className='skillBar'>
            <img src={prog} alt="Web Development" className='skillImg'/>
            <div className="text">
                <h2>Back-End Development</h2>
                <p>Proficient in backend development, building robust server-side applications using Node.js and Express. Experienced in working with both MongoDB for scalable data storage and Firebase for real-time database management and authentication, ensuring seamless integration and high performance across the stack.</p>
            </div>

        </div>
        <div className='skillBar'>
            <img src={creativeWriting} alt="Research and Writing" className='skillImg'/>
            <div className="text">
                <h2>Research and Writing</h2>
                <p>Experienced in research and technical writing, with the ability to analyze complex information and present it clearly and effectively. Skilled in producing detailed reports, documentation, and content that supports data-driven insights and enhances project understanding.</p>
            </div>

        </div>
    </section>
  )
}

export default Skill
