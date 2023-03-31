import React, {useState} from 'react'

function SearchProperty() {
    const [property, setProperty] = useState('');
  
    const handleCityChange = (event) => {
      setProperty(event.target.value);
    }
    
  return (
    <div className='searchbar-container'>
        <select defaultValue={city} onChange={handleCityChange}>
            <option value="" disabled selected hidden>Select a city</option>
            <option value="Newcastle">Newcastle</option>
            <option value="Liverpool">Liverpool</option>
            <option value="Nottingham">Nottingham</option>
        </select>
        <button onClick={handleSearch}>Find Homes</button>
  </div>
  )
}

export default SearchProperty
