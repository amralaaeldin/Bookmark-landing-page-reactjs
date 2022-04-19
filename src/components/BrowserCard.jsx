import React from 'react'
import LazyLoad from 'react-lazyload';

function BrowserCard({ src, main, sub, btn, alt }) {
  return (
    <div className='card'>
      <div className="browser-icon">
        <LazyLoad offset={100}>
          <img width='102px' height='100px' src={src} alt={alt} />
        </LazyLoad>
      </div>
      <h3>{main}</h3>
      <p>{sub}</p>
      <img width='248px' height='4px' className='dotted-divider' src="./images/bg-dots.svg" alt="dotted-divider" />
      {btn}
    </div>
  );
}

export default BrowserCard;
