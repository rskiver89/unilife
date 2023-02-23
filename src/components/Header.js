import React from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'
import {AiOutlineHeart, AiOutlineMail, AiOutlineSnippets} from 'react-icons/ai'

function Header() {
  return (
    <div className='nav-container'>
        {/* <Link to="/"> */}
            <h1><AiOutlineSnippets className='icon-logo' />UniLife</h1>
        {/* </Link> */}
        <nav>
            <ul className='nav-list'>
                <li><AiOutlineHeart className='nav-icon' />Shortlist</li>
                <li><AiOutlineMail className='nav-icon' />Contact Us</li>
            </ul>
        </nav>

      
    </div>
  )
}

export default Header
