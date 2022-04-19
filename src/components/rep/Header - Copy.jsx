import React from 'react'
import HandleNav from './HandleNav'


function Header() {

  return (
    <header className='container'>
      <div className="logo">
        <img src="./images/logo-bookmark.svg" alt="logo-bookmark" />
      </div>

      <nav >
        <HandleNav />
      </nav>
    </header>
  )
}

export default Header
