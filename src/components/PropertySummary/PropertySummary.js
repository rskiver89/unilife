import React from 'react';
import './PropertySummary.css';
import {MdOutlineBedroomParent, MdOutlineBathtub, MdHome} from 'react-icons/md'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';

function PropertySummary({ property, onBookViewingClick, shortlistedHomes, setShortlistedHomes }) {
  const isShortlisted = shortlistedHomes.some((home) => home._id === property._id);

const toggleShortlist = () => {
  if (isShortlisted) {
    setShortlistedHomes(shortlistedHomes.filter((home) => home._id !== property._id));
  } else {
    setShortlistedHomes([...shortlistedHomes, property]);
  }
};

// const shortlistProperty = () => {
//   if (shortlistedHomes.some((home) => home._id === property._id)) {
//     setShortlistedHomes(shortlistedHomes.filter((home) => home._id !== property._id));
//   } else {
//     setShortlistedHomes([...shortlistedHomes, property]);
//   }
// };


  return (
    <div className='property-summary-container'>
      <div className="property-summary">
        <div className='property-address'>
          <h1>{property.address.street}</h1>
          <h1>{property.address.city}, {property.address.postcode}</h1>
        </div>

        <div className='summary-item-container'>
          <div className='summary-item'>
            <p className='summary-name'>Bedrooms</p>
            <div className='summary-icon-info'>
              <MdOutlineBedroomParent className='summary-icon' />
              <p className='summary-info'>{property.bedroom_count}</p>
            </div>
          </div>

          <div className='summary-item'>
            <p className='summary-name'>Bathrooms</p>
            <div className='summary-icon-info'>
              <MdOutlineBathtub className='summary-icon' />
              <p className='summary-info'>{property.bathroom_count}</p>
            </div>
          </div>

          <div className='summary-item'>
            <p className='summary-name'>Property Type</p>
            <div className='summary-icon-info'>
              <p className='summary-info'>{property.property_type}</p>
            </div>
          </div>

          <div className='summary-item'>
            <p className='summary-name'>Price</p>
            <div className='summary-icon-info'>
              <p className='summary-info'>{property.rent}</p>
            </div>
          </div>

          <div className='summary-item'>
            <p className='summary-name'>Furnished Type</p>
            <div className='summary-icon-info'>
              <p className='summary-info'>{property.furnished}</p>
            </div>
          </div>

          <div className='summary-item'>
            <p className='summary-name'>Availability</p>
            <div className='summary-icon-info'>
              <p className='summary-info'>{property.availability}</p>
            </div>
          </div>

        </div>
      </div>

      <div className='summary-buttons-container'>
        {
          isShortlisted
          ? 
          <button className="summary-button" style={{ backgroundColor: "white", color: "black" }} onClick={toggleShortlist}>
          <AiFillHeart style={{ marginRight: "8px" }} />Remove from Shortlist
          </button>
          :
          <button className="summary-button" style={{ backgroundColor: "white", color: "black" }} onClick={toggleShortlist}>
          <AiOutlineHeart style={{ marginRight: "8px" }} />Shortlist
          </button>
        }
        <button className='summary-button' onClick={onBookViewingClick}>Book Viewing</button>
      </div>
    </div>
  );
};

export default PropertySummary;
