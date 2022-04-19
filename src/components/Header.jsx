import React, { useState } from 'react'
import './styles/header.css'


function Header() {
  const [open, setOpen] = useState(false)

  const toggleNav = () => {
    setOpen((open) => !open)
  }

  return (
    <header className='container'>
      <div className="logo">
        {open ?
          <img width='148px' height='25px' src="./images/logo-open.svg" alt="logo-open" /> :
          <img width='148px' height='25px' src="./images/logo-bookmark.svg" alt="logo-bookmark" />
        }
      </div>
      <nav className={open ? 'nav-open' : ''}>
        <ul>
          <li>features</li>
          <li>pricing</li>
          <li>contact</li>
        </ul>
        <button className={open ? 'btn light' : 'btn red'}>log in</button>
      </nav>
      <div className="container icon">
        {open ?
          <img width='17px' height='15px' className='list-icon' onClick={toggleNav} src="./images/icon-close.svg" alt="icon-list" /> :
          <img width='17px' height='15px' className='list-icon' onClick={toggleNav} src="./images/icon-hamburger.svg" alt="icon-list" />
        }
      </div>
    </header>
  )
}

export default Header
