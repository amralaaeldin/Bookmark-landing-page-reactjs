import React from 'react'
import './styles/footer.css'
import './../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <img width='125px' height='21px' src="./images/logo-bookmark-footer.svg" alt="logo-bookmark" />
          <ul>
            <li>features</li>
            <li>pricing</li>
            <li>contact</li>
          </ul>
        </div>
        <div className="social">
          <div className="facebook">
            <i className="fa-brands fa-facebook-square"></i>
          </div>
          <div className="twitter">
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer