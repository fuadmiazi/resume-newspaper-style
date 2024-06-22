import React from 'react'
import './Certifications.css'
import frontEndCertificate from '../../assets/frontEnd.png'

const Certifications = () => {
  return (
    <div>
      <h1>Certifications</h1>
      <div className="certificates">
        <h2>Introduction to Front-End Development</h2>
        <a href="https://coursera.org/verify/6S9BUA5WEKX7" target="_blank"><img id='certificate-img' src={frontEndCertificate} alt="" /></a>
      </div>
    </div>
  )
}

export default Certifications
