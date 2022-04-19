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
        <img src="./images/logo-bookmark.svg" alt="logo-bookmark" />
      </div>
      {open ?
        <nav className='nav-open'>
          <ul>
            <li>features</li>
            <li>pricing</li>
            <li>contact</li>
          </ul>
          <button className='btn light'>log in</button>
        </nav>
        :
        <nav className=''>
          <ul>
            <li>features</li>
            <li>pricing</li>
            <li>contact</li>
          </ul>
          <button className='btn red'>log in</button>
        </nav>
      }
      <div className="container logo-open">
        <img src="./images/logo-open.svg" alt="logo-open" />
      </div>
      <div className="container icon">
        {open ?
          <img className='list-icon' onClick={toggleNav} src="./images/icon-close.svg" alt="icon-list" /> :
          <img className='list-icon' onClick={toggleNav} src="./images/icon-hamburger.svg" alt="icon-list" />
        }
      </div>
    </header>
  )
}

export default Header
