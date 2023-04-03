import React from 'react';
import '../styles/BedroomPrices.css';

function BedroomPrices({ bedroomPrices }) {
  const bedrooms = Object.entries(bedroomPrices);

  return (
    <div className='bedroom-prices-wrapper'>
    <div className="bedroom-prices-container">
      {bedrooms.map(([bedroom, price], index) => (
        <div key={index} className="bedroom-prices">
          <p className='bedroom'>Bedroom {index + 1} </p>
          <p>${price}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default BedroomPrices;
