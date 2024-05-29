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
      </div>
    </div>
  )
}

export default LangSkills
