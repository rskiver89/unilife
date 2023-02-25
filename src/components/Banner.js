import React, { useState } from 'react'
import cover from '../assets/cover-img.png'
import '../styles/Homepage.css'

function Banner() {
  const [city, setCity] = useState('');
  const [bedrooms, setBedrooms] = useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  }

  const handleBedroomsChange = (event) => {
    setBedrooms(event.target.value);
  }

  const handleSearch = () => {
    console.log(`Searching for homes in ${city} with ${bedrooms} bedrooms`);
  }
  return (
    <div className='banner-container'>
              <img style={{width:'100%', filter:'brightness(50%)'}} src={cover} alt="Banner" />
              <div className='searchbar-container'>
        <select value={city} onChange={handleCityChange}>
          <option value="" disabled selected hidden>Select a city</option>
          <option value="Kentwood">Kentwood</option>
          <option value="New York">New York</option>
          <option value="Chicago">Chicago</option>
        </select>
        <select value={bedrooms} onChange={handleBedroomsChange}>
          <option value="" disabled selected hidden>Select number of bedrooms</option>
          <option value="1">1 bedroom</option>
          <option value="2">2 bedrooms</option>
        </select>
      <button onClick={handleSearch}>Find Homes</button>
    </div>
    </div>
  )
}

export default Banner
