import React from 'react';
import '../styles/CityCard.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CityCard({city}) {
  const navigate = useNavigate();

  const handleCityClick = () => {
    navigate(`/city-details/${city.name}`);
  };

  return (
    <div onClick={handleCityClick}>
       <Link to={`/city-details/${city.name}`}>
        <h3>{city.name}</h3>
      </Link>
    </div>
  );
};

export default CityCard;