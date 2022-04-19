import React from 'react'

function Link({ activeId, title, index, onClick, id }) {

  return (
    <span onClick={() => onClick(index)} className={activeId === id ? 'slide-title active' : 'slide-title'}>
      {title}
    </span>
  )
}

export default React.memo(Link)
