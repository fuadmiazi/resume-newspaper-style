import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <ul className='git'>
        <li>Github [Projetcs]</li>
          <li><a href="https://github.com/fuadmiazi" target="_blank">fuadmiazi</a></li>
      </ul>
      {/* <ul>
        <li>Phone</li>
        <li>+880 1518442776</li>
      </ul> */}
      <ul>
        <li>Address</li>
        <li>Dhaka, Bangladesh</li>
      </ul>
    </div>
  )
}

export default Header
