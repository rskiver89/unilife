import React, { useState } from 'react';
import './Search.css';
import { useNavigate } from 'react-router-dom';

function SearchCity({ allCities }) {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    if (city) {
      const cityName = city.replace(/ /g, '-').toLowerCase();
      navigate(`/city-details/${cityName}`);
    }
  };

  return (
    <div className='searchbar-container'>
      <select defaultValue={city} onChange={handleCityChange} className='search-city'>
        <option value="">Select a city</option>
        {allCities.map((city) => (
          <option key={city._id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
      <button onClick={handleSearch} className='find-homes-button'>
        Find Homes
      </button>
    </div>
  );
}

export default SearchCity;
