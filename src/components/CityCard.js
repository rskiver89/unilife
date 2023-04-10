import React from 'react';
import '../styles/CityCard.css'
import { Link } from 'react-router-dom';

function CityCard({city}) {

  return (
    <div>
       <Link to={`/city-details/${city.name}`}>
        <h3>{city.name}</h3>
      </Link>
    </div>
  );
};

export default CityCard;