import React from 'react';
import './CityCard.css'
import { Link } from 'react-router-dom';

function CityCard({ city, fontColor}) {
  return (
    <Link
      to={`/city-details/${city?.name}`}
      className={`city-card-link city-card-link-${fontColor}`}
    >
      <h3 className='city-card-name'>{city.name}</h3>
    </Link>
  );
}

export default CityCard;
