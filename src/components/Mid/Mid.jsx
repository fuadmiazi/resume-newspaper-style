import React from 'react'
import './Mid.css'

const Mid = () => {
  return (
    <div className='mid'>
      <div className="left-col-mid">
        <h1>Work Experience</h1>
        <h4>Banglafire Solution Ltd. <span id='italic'>2024 to Present</span></h4>
        <h5 id='job-des'>Software Engineer Intern</h5>
        <p>I am working in this company as an Intern since
            January 2024 till now. I have worked on the 
            company’s website along with the other business websites of the company. </p>
      </div>

      <div className="right-col-mid">
        <h1>Education</h1>
        <h4>North South University <span id='italic'>2024</span></h4>
        <h5 id='job-des'>Computer Science and Engineering</h5>
        <p>I have completed my undergrad from one of the most prestigious universities of the country. Throughout the journey I have learned fundamental of programming languages, algorithm, data structure and how to approach in a project with a team.</p>
      </div>
    </div>
  )
}

export default Mid
