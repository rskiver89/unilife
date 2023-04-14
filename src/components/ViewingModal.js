import React from 'react';
import '../styles/ViewingModal.css';
import { MdOutlineAddHomeWork } from 'react-icons/md';

function ViewingModal({ isOpen, address, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="viewing-modal-backdrop">
              <button onClick={onClose} className="close-button">X</button>
      <div className="viewing-modal">
        <div className='modal-header-container'>
          <div className='modal-header'>
            <h2 style={{marginBottom: '16px'}}>Book a Viewing</h2>
            <address>{address}</address>
          </div>
          <MdOutlineAddHomeWork size={40} style={{color: '#3A5295'}} />
        </div>
        
        <form>
          <div className='form-container'>
            <div className='personal-info-conatiner'>
              <div className='personal-info'>
                <label htmlFor='name'>Name</label>
                <input name='name' type="text" placeholder="Enter your name" />
              </div>

              <div className='personal-info'>
                <label htmlFor='email'>Email</label>
                <input name='email' type="email" placeholder=" Enter your email" />
              </div>

              <div className='personal-info'>
                <label htmlFor='phoneNumber'>Phone Number</label>
                <input name='phoneNumber' type="tel" placeholder="Enter your phone number" />
              </div>
            </div>

            <div className='message-container'>
              <div className='personal-info'>
                <label htmlFor='message'>Message</label>
                <textarea name='message' placeholder="Message"></textarea>
              </div>
              <button className='submit-button' type="submit">Submit</button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}

export default ViewingModal;
