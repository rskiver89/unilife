import React, { useState } from 'react';
import './Header.css';
import { AiOutlineHeart, AiOutlineMail, AiOutlineSnippets } from 'react-icons/ai';
import ContactUsModal from '../Modals/ContactUsModal';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);

  const openContactUsModal = () => {
    setIsContactUsModalOpen(true);
  };

  const closeContactUsModal = () => {
    setIsContactUsModalOpen(false);
  };

  const navigate = useNavigate();

  const navigateToHomepage = () => {
    navigate('/');
  };

  return (
    <div className='nav-container'>
      <div onClick={navigateToHomepage} className='logo'>
        <h1>
          <AiOutlineSnippets className='icon-logo' />UniLife
        </h1>
      </div>
      
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
