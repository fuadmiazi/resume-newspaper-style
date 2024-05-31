import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='header'>
      <ul className='git'>
        <li>Github [Projetcs]</li>
          <li><a href="https://github.com/fuadmiazi" target="_blank">fuadmiazi</a></li>
      </ul>
      <ul className='logo'>
        <img src={logo} alt="" />
      </ul>
      <ul>
        <li>Address</li>
        <li>Dhaka, Bangladesh</li>
      </ul>
    </div>
  )
}

export default Header
