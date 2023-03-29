import React, { useState, useEffect } from 'react';
import '../styles/CityCard.css'
import axios from 'axios';

const CityCard = () => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCities = async () => {
    try {
      const response = await axios.get('https://unilife-server.herokuapp.com/cities?limit=9');
      console.log(response.data);
      setCities(response.data.response); // Set the cities state using the response property from the response object
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='cities-container'>
      <h2 style={{marginBottom: '64px'}}>Student accommodations in our top cities</h2>
      <div className='cities-grid'>
        {cities.map((city) => (
          <div className='city-item'>
            <img src={city.image_url} alt={city.name}  />
            <div className='city-name'>
            <h3 key={city._id}>{city.name}</h3>
            <p style={{textAlign: 'center', margin: '8px'}}>{city.property_count} properties</p>
            </div>
          </div>
        ))}
       </div>
    </div>
  );
};

export default CityCard;
