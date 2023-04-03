import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropertyImages from '../components/PropertyImages';
import BedroomPrices from '../components/BedroomPrices';


function HomeDetails() {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);
  

  useEffect(() => {
    axios
      .get(`https://unilife-server.herokuapp.com/properties/${propertyId}`)
      .then((res) => {
        console.log(res.data);
        setProperty(res.data);
      })
      .catch((err) => console.log(err));
  }, [propertyId]);
  

  return (
    <div className='details-container'>
      {property ? (
      <div>
        <div className='components'>
          <PropertyImages images={property.images} />
        </div>
        <div className='description'>
          <h2>Description</h2>
          <p>{property?.property_description}</p>
        </div>
        <div>
          <h2>Bedroom Prices</h2>
          <BedroomPrices bedroomPrices={property.bedroom_prices} />
        </div>
      </div>
) : (
      <p>Loading property details...</p>
)}

    </div>
  );
}

export default HomeDetails;
