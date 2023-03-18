import React, {useState} from 'react'
import '../styles/Search.css'

function SearchCity() {

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
    <div className='searchbar-container'>
    <select defaultValue={city} onChange={handleCityChange}>
      <option value="" disabled selected hidden>Select a city</option>
      <option value="Kentwood">Kentwood</option>
      <option value="New York">New York</option>
      <option value="Chicago">Chicago</option>
    </select>
    <select defaultValue={bedrooms} onChange={handleBedroomsChange}>
      <option value="" disabled selected hidden>Select number of bedrooms</option>
      <option value="1">1 bedroom</option>
      <option value="2">2 bedrooms</option>
    </select>
    <button onClick={handleSearch}>Find Homes</button>
  </div>
  )
}

export default SearchCity
