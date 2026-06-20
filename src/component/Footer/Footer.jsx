import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-section'>
          <h2>Foodie</h2>
          <p>Delicious food delivey to your doorstep.</p>
        </div>
        <div className='footer-section'>
          <h3>Quick Links</h3>
          <ul>
            <li>Home </li>
            <li>About</li>
            <li>Menu</li>
            <li>Contacts</li>
          </ul>
        </div>

        <div className='footer-section'>
          <h3>Contact Info</h3>
          <p>Email : info@foodie.com</p>
          <p>Phone : +91 9876543210</p>
        </div>

      </div>

      <div className='footer-bottom'>
        <p> &copy; 2026 Foodie. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer