import React from 'react';
import '../styles/ViewingModal.css';

function ViewingModal({ isOpen, address, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="viewing-modal-backdrop">
      <div className="viewing-modal">
        <button onClick={onClose} className="close-button">X</button>
        <h2>Book a Viewing</h2>
        <p>{address}</p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ViewingModal;
