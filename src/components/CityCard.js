import React from 'react';
import '../styles/CityCard.css'
import { Link } from 'react-router-dom';

function CityCard({city, property}) {

  return (
    <div>
      {/* <Link to={`/city-details/${property._id}`}> */}
        <h3>{city.name}</h3>
        {/* <button>See Details</button>
      </Link> */}
    </div>
  );
};

export default CityCard;