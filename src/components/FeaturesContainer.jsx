import React, { useState, useMemo, useCallback } from 'react'
import Tag from './Tag'
import Feature from './Feature'

import { FeaturesData as features } from './FeaturesData.js'



function FeaturesContainer() {

  const [translate, setTranslate] = useState('0')
  const [active, setActive] = useState(features[0].id)
  const styles = { transform: `translateX(${translate}%)` }
  const activeStyles = { transform: `translateX(${-translate}%)` }


  const select = useCallback((index) => {
    setTranslate(`${index * -100}`)
    setActive(features[index].id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  const btn = useMemo(() => {
    return <button className='btn btn-dark'>more info</button>
  }, [])

  return (
    <>
      <div className="links-container">

        {features.map(({ id, title }, index) => (
          <Tag onClick={select} key={id} activeId={active} id={id} index={index} title={title} />
        ))}
        <span style={activeStyles} className="underline-selected"></span>
      </div>

      <div style={styles} className='container-features'>
        {features.map(({ id, heading, text, src }) => (
          <Feature btn={btn} key={id} heading={heading} text={text} src={src} />
        ))}
      </div>
    </>
  )
}

export default FeaturesContainer
