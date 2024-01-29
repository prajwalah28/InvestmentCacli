import React from 'react'
import logo from '../assets/download (2).jpeg'
import './Header.css'

export default function Header() {
  return (
    <>
        <div className="logo">
            <img   src={logo}/>
        </div>
        <div className="Heading">
            Investment Calculator
        </div>
        
    </>
  )
}
