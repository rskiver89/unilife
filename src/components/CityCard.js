import React from 'react';
import '../styles/CityCard.css'

function CityCard({city}) {

  return (
    <div>
        <h3>{city.name}</h3>
    </div>
  );
};

export default CityCard;