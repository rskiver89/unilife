import React, {useState} from 'react'
import '../styles/Footer.css'
import {SiFacebook, SiTwitter, SiInstagram} from 'react-icons/si'

function Footer() {
  const [email, setEmail] = useState('')


  return (
    <div className='footer-container'>
      <div className='contact-container'>
      <div className='contact'>
        <h3>Keep in touch</h3>
        <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
        <input className='email-input' type={email} placeholder='Your email' />
      </div>
      <div className='socialize'>
        <h3 style={{marginBottom: '8px'}}>Let's Socialize</h3>
        <div className='social-icon'>
        <SiFacebook />
        <p className='social-name'>Facebook</p>
        </div>
        <div className='social-icon'>
        <SiTwitter />
        <p className='social-name'>Twitter</p>
        </div>
        <div className='social-icon'>
        <SiInstagram />
        <p className='social-name'>Instagram</p>
        </div>
      </div>
      </div>
      <div className='footer-content-container'>
      <ul className='footer-content'>
        <li>About Us</li>
        <li>Terms & Conditions</li>
        <li>Privacy & Cookie Policies</li>
      </ul>
      </div>
    </div>
  )
}

export default Footer
