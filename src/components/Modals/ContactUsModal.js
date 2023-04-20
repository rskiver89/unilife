import React from 'react';
import './Modals.css';
import { AiOutlineCloseCircle, AiOutlineMail } from 'react-icons/ai';

function ContactUsModal({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
      }
    
      return (
        <div className="modal-backdrop">
          <div className="modal">
            <button onClick={onClose} className="close-button"><AiOutlineCloseCircle size={15} /></button>
            <div className='modal-header-container'>
              <div className='modal-header'>
                <h2 style={{marginBottom: '16px'}}>Contact us</h2>
                <p>Feel free to contact us if you have any questions.
                    Looking forward to hear from you.
                </p>
              </div>
              <AiOutlineMail size={40} style={{color: '#3A5295'}} />
            </div>
            
            <form>
              <div className='form-container'>
                <div className='personal-info-conatiner'>
                  <div className='personal-info'>
                    <label htmlFor='name'>Name</label>
                    <input name='name' type="text" placeholder="Enter your name" />
                  </div>
    
                  <div className='personal-info'>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input name='phoneNumber' type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div className='personal-info'>
                      <label htmlFor='student'>Are you a..</label>
                      <select name='student'>
                        <option value=''>Choose an option</option>
                        <option value='student'>Student</option>
                        <option value='non-student'>Non-Student</option>
                      </select>
                  </div>
                </div>
    
                <div className='message-container'>
                  <div className='personal-info'>
                    <label htmlFor='email'>Email</label>
                    <input name='email' type="email" placeholder=" Enter your email" />
                  </div>

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

export default ContactUsModal;