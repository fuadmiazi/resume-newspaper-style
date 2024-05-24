import React from 'react'
import './LangSkills.css'

const LangSkills = () => {
  return (
    <div className='lang-skills'>
      <div className="left-col-lang">
        <h1>Languages</h1>
        <ul className='lang-list'>
            <li>Bangla &nbsp;<span className='dot'></span><span className='dot'></span><span className='dot'></span><span className='dot'></span><span className='dot'></span></li>
            <li>English &nbsp;<span className='dot'></span><span className='dot'></span><span className='dot'></span><span className='dot'></span><span className='dot-not'></span></li>
            <li>Hindi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='dot'></span><span className='dot'></span><span className='dot'></span><span className='dot-not'></span><span className='dot-not'></span></li>
        </ul>
      </div>
        
      <div className="right-col-skills">
        <h1>Skills</h1>
      </div>
    </div>
  )
}

export default LangSkills
