// ShortlistModal.js
import React from 'react';
import './Modals.css';
import { AiOutlineCloseCircle, AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';


function ShortlistModal({ isOpen, onClose, shortlistedHomes }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header-container shortlist-modal-header-container">
          <h2 style={{marginBottom: '32px'}}>Shortlist</h2>
            <div className='icon-close'>
              <button onClick={onClose} className="close-button"><AiOutlineCloseCircle size={15} /></button>
              <AiFillHeart size={40} style={{color: '#3A5295'}} />
            </div>
        </div>
        <ul>
          {
          shortlistedHomes.map((home) => (
            <div key={home} className='shortlisted-home'>
               <img src={home.images[0]} style={{width: '20%', borderRadius: '8px'}} />
               <div className='shortlist-address'>
                    <h3>{home.address.street}</h3>
                    <h3>{home.address.city}, {home.address.postcode}</h3>
                </div>
                <Link to={`/home-details/${home._id}`} style={{cursor: 'auto'}}><button onClick={onClose} className='shortlist-view-home'>View Home</button></Link>
            </div>
          ))
          }
        </ul>
      </div>
    </div>
  );
}

export default ShortlistModal;
