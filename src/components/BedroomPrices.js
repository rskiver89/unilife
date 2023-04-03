import React from 'react';
import '../styles/BedroomPrices.css';

const BedroomPrices = ({ bedroomPrices }) => {
  const bedrooms = Object.entries(bedroomPrices);

  return (
    <div className="bedroom-prices">
      {bedrooms.map(([bedroom, price], index) => (
        <div key={index} className="bedroom-price">
          <p className='bedroom'>Bedroom {index + 1} ${price}</p>
        </div>
      ))}
    </div>
  );
};

export default BedroomPrices;
