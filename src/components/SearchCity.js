import React, {useState} from 'react'
import '../styles/Search.css'

function SearchCity() {

    const [city, setCity] = useState('');
  
    const handleCityChange = (event) => {
      setCity(event.target.value);
    }
  
    const handleSearch = () => {
      console.log(``);
    }

  return (
    <div className='searchbar-container'>
    <select defaultValue={city} onChange={handleCityChange} className='search-city'>
      <option value="" disabled selected hidden>Select a city</option>
      <option value="Newcastle">Newcastle</option>
      <option value="Liverpool">Liverpool</option>
      <option value="Nottingham">Nottingham</option>
    </select>
    <button onClick={handleSearch}>Find Homes</button>
  </div>
  )
}

export default SearchCity
