import React, { useState, useEffect, useCallback } from 'react'

function HandleNav() {

  const [open, setOpen] = useState(false)



  const Toggle = useCallback(() => {
    setOpen(!open)
  }, [open])



  if (open) {
    return (
      <>
        <ul className='open'>
          {console.log('ru1')}
          <li>features</li>
          <li>pricing</li>
          <li>contact</li>
        </ul>
        <button className="btn red">log in</button>
        <img onClick={Toggle} src="./images/icon-close.svg" alt="icon-list" />
      </>
    )
  }
  return (
    <>
      <ul>
        {console.log('ru2')}
        <li>features</li>
        <li>pricing</li>
        <li>contact</li>
      </ul>
      <button className="btn red">log in</button>
      <img onClick={Toggle} src="./images/icon-hamburger.svg" alt="icon-list" />
    </>
  )
}

export default HandleNav
