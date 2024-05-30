import React from 'react'
import './LangSkills.css'

const LangSkills = () => {
  return (
    <div className='lang-skills'>
      <div className="left-col-lang">
        <h1>Languages</h1>
        <div className="language">
          <div className="left-lang">
            <p>Bangla</p>
          </div>

          <div className="right-dot">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>

        <div className="language">
          <div className="left-lang">
            <p>English</p>
          </div>

          <div className="right-dot">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot-not"></div>
          </div>
        </div>

        <div className="language">
          <div className="left-lang">
            <p>Hindi</p>
          </div>

          <div className="right-dot">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot-not"></div>
            <div className="dot-not"></div>
          </div>
        </div>
      </div>
        
      <div className="right-col-skills">
        <h1>Skills</h1>
        <div className="skills">
          <p className='skill'>ReactJs</p>
          <p className='skill'>NodeJs</p>
        </div>
        <div className="skills">
          <p className='skill'>MongoDB</p>
          <p className='skill'>Bootstrap</p>
        </div>
        <div className="skills">
          <p className='skill'>ExpressJs</p>
          <p className='skill'>Figma</p>
        </div>
      </div>
    </div>
  )
}

export default LangSkills
