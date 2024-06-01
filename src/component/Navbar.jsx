import React, { useState } from 'react'
import reactLogo from '../assets/react.svg'
const Navbar = () => {
    const [active, setActive] = useState('menu-item')
    const [activeIcon, setActiveIcon] = useState('nav_toggler')

    const toggleActive = () => {
        active === 'menu-item' ? setActive('menu-item menu-active') : setActive('menu-item')
        activeIcon === 'nav_toggler' ? setActiveIcon('nav_toggler icon-active') : setActiveIcon('nav_toggler')
    }


  return (
    <nav>
        <div className="logo">
            <img src={reactLogo} alt="" />
        </div>
        <ul className={active}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div className={activeIcon} onClick={toggleActive}>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
        </div>
    </nav>
  )
}

export default Navbar