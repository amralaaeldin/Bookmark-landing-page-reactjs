import React from 'react'
import Content from './Content'
import LazyLoad from 'react-lazyload';

function Feature({ btn, heading, text, src }) {
  return (
    <section id={heading[0]} className='container-feature'>
      <div className="img">
        <LazyLoad offset={100}>
          <img width='536px' height='346px' src={src} alt={heading} />
        </LazyLoad>
      </div>
      <Content >
        <h3>{heading}</h3>
        <p>{text}</p>
        {btn}
      </Content>
    </section>
  )
}

export default Feature
