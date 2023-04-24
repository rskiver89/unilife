import React, { useState } from 'react';
import './Header.css';
import { AiOutlineHeart, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { RiHomeHeartLine } from 'react-icons/ri'
import ContactUsModal from '../Modals/ContactUsModal';
import { useNavigate } from 'react-router-dom';
import ShortlistModal from '../Modals/ShortlistModal';

function Header({ shortlistedHomes, setShortlistedHomes }) {
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [isShortlistModalOpen, setIsShortlistModalOpen] = useState(false);

const openShortlistModal = () => {
  setIsShortlistModalOpen(true);
};

const closeShortlistModal = () => {
  setIsShortlistModalOpen(false);
};

  const openContactUsModal = () => {
    setIsContactUsModalOpen(true);
  };

  const closeContactUsModal = () => {
    setIsContactUsModalOpen(false);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const navigate = useNavigate();

  const navigateToHomepage = () => {
    navigate('/');
  };

  return (
    <div className={`nav-container ${menuVisible ? 'expanded-header' : ''}`}>
      <div onClick={navigateToHomepage} className='logo'>
        <h1>
          <RiHomeHeartLine className='icon-logo' />UniLife
        </h1>
      </div>

      <nav>
        <ul className='nav-list'>
        <li>
          <div className='shortlist' onClick={openShortlistModal}>
            <AiOutlineHeart className='nav-icon' />
            <p>Shortlist</p>
          </div>
        </li>

          <li>
            <div onClick={openContactUsModal} className='contact-us'>
            <AiOutlineMail className='nav-icon' />
            <p>Contact Us</p>
            </div>
          </li>
        </ul>
      </nav>

      <div className='hamburger-menu'>
        <AiOutlineMenu className='hamburger-icon' onClick={toggleMenu} />
        <ul className={`menu-items ${menuVisible ? 'visible' : ''}`}>
        <li>
          <div className='shortlist' onClick={openShortlistModal}>
            <AiOutlineHeart className='nav-icon' />
            <p>Shortlist</p>
          </div>
        </li>

          <li>
            <div onClick={openContactUsModal} className='contact-us'>
            <AiOutlineMail className='nav-icon' />
            <p>Contact Us</p>
            </div>
          </li>
        </ul>
      </div>

      <ShortlistModal
        isOpen={isShortlistModalOpen}
        onClose={closeShortlistModal}
        shortlistedHomes={shortlistedHomes}
      />

      <ContactUsModal
        isOpen={isContactUsModalOpen}
        onClose={closeContactUsModal}
      />
    </div>
  );
}

export default Header;
