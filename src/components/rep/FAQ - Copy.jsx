import React, { useState } from 'react';
import Content from './Content';
import { FAQData } from './FAQData.js'
import './styles/faq.css'


function FAQ() {
  let [active, setActive] = useState([])
  const toggleActive = (e) => {
    if (active.includes(e.currentTarget.id)) {
      let activeIds = [...active]
      activeIds.splice(activeIds.indexOf(e.currentTarget.id), 1)
      setActive(activeIds)
    } else {
      setActive([...active, e.currentTarget.id])
    }
  }
  return (
    <div main className='container faq-section' >
      <Content>
        <h2>frequently asked questions</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur in, neque alias fugit sed distinctio aliquid animi perferendis laudantium?</p>
      </Content>
      <div className="wrapper">
        {FAQData.map(({ id, q, a }) => (
          <div key={id} id={id} onClick={(e) => toggleActive(e)} className="item">
            <div className={(active.includes(id)) ? 'qa-content active' : 'qa-content'}>
              <h4>{q}
                <div className={(active.includes(id)) ? 'icon active' : 'icon'}>
                  {(active.includes(id)) ?
                    <img src="./images/icon-arrow-active.svg" alt="icon-arrow" /> :
                    <img src="./images/icon-arrow.svg" alt="icon-arrow" />
                  }
                </div>
              </h4>
              <p>{a}</p>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
}

export default FAQ;
