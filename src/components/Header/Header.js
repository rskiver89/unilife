import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineMail, AiOutlineSnippets } from 'react-icons/ai';
import ContactUsModal from '../Modals/ContactUsModal';

function Header() {
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);

  const openContactUsModal = () => {
    setIsContactUsModalOpen(true);
  };

  const closeContactUsModal = () => {
    setIsContactUsModalOpen(false);
  };

  return (
    <div className='nav-container'>
      <Link to='/' className='logo'>
        <h1>
          <AiOutlineSnippets className='icon-logo' />UniLife
        </h1>
      </Link>
      <nav>
        <ul className='nav-list'>
          <li>
            <AiOutlineHeart className='nav-icon' />Shortlist
          </li>
          <li onClick={openContactUsModal} className='contact-us'>
            <AiOutlineMail className='nav-icon' />Contact Us
          </li>
        </ul>
      </nav>
      <ContactUsModal
        isOpen={isContactUsModalOpen}
        onClose={closeContactUsModal}
      />
    </div>
  );
}

export default Header;
