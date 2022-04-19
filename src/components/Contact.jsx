import React, { useState, useRef } from 'react'
import './styles/contact.css'
import Content from './Content';
import Joi from 'joi-browser';


function Contact() {
  const schema = {
    email: Joi.string().email().required()
  }
  const [state, setState] = useState(null)
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  const handlingSubmit = (e) => {
    e.preventDefault();
    Joi.validate({ email: value.trim() }, schema, function (err, value) {
      if (err !== null) {
        setState('err');
      } else {
        setState('correct');
      }
    });
  }

  return (
    <div className="contact">
      <Content>
        <p>35,000+ already joined</p>
        <h3>stay up-to-date with what <br /> we're doing</h3>
      </Content>
      <form onSubmit={(e) => handlingSubmit(e)} action="">

        <div className="text">
          {state && <div className={`bg ${state}`}>
            {(state === 'err' && "whoops, make sure it's an email") || (state === 'correct' && 'correct, thanks for subscribing')}
          </div>}
          <label htmlFor='email'>Email:</label>
          <input ref={inputRef} value={value} onChange={(e) => setValue(e.currentTarget.value)} name="email" id="email" />
          {state === 'err' && <i className="fa-solid fa-circle-exclamation err"></i>}
          {state === 'correct' && <i class="fa-solid fa-circle-check correct"></i>}
        </div>
        <button type="submit" className='btn red'>contact us</button>
      </form>
    </div>
  )
}

export default Contact