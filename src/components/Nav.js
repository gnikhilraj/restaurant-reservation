import React, { useState } from 'react'
import logo from '../images/Logo .svg'

function Nav(){

    const [menuOpen , setMenuOpen] = useState(false);
    
    const toggleMenu = ()=>{
        return setMenuOpen(!menuOpen);
    }

    return (
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href='/' className='logo'><img src={logo} alt='logo'/></a>

        <div className='menu-icon' onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>

        <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
            <li>
            <a href='/'>Home</a>
            </li>

            <li>
            <a href='/about'>About</a>
            </li>

            <li>
            <a href='/services'>Services</a>
            </li>

            <li>
            <a href='/menu'>Main Menu</a>
            </li>

            <li>
            <a href='/reservation'>Reservations</a>
            </li>

            <li>
            <a href='/order'>Order Online</a>
            </li>

            <li>
            <a href='/login'>Login</a>
            </li>
        </ul>

      </nav>
    )
  
}

export default Nav;