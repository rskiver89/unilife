import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropertyImages from '../components/PropertyImages';
import BedroomPrices from '../components/BedroomPrices';
import PropertySummary from '../components/PropertySummary';
import '../styles/HomeDetails.css'
import {HiOutlineCheck} from 'react-icons/hi'


function HomeDetails() {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);
  const [keyFeatures, setKeyFeatures] = useState();
  

  useEffect(() => {
    axios
      .get(`https://unilife-server.herokuapp.com/properties/${propertyId}`)
      .then((res) => {
        console.log(res.data);
        setProperty(res.data);
        setKeyFeatures(res.data.key_features);
      })
      .catch((err) => console.log(err));
  }, [propertyId]);
  

  return (
    <div className='home-details-container'>
      {property ? (
      <div>
        
        <div className='components'>
          <PropertyImages images={property.images} />
          <PropertySummary property={property} />
        </div>

        <div className='more-home-details'>
        <div className='description'>
          <h2>Description</h2>
          <p>{property?.property_description}</p>
          <div className='key-features'>
            <h2>Key Features</h2>
            {
              keyFeatures?.map((feature, index) => {
                return (
                  <ul key={index}>
                    <li><HiOutlineCheck style={{marginRight: '8px'}} />{feature}</li>
                  </ul>
                )
              })
            }
            </div>
        </div>
        <div className='bedrooms'>
        <h2>Bedroom Prices</h2>
          <BedroomPrices bedroomPrices={property.bedroom_prices} />
        </div>
        </div>
      </div>
) : (
      <p>Loading property details...</p>
)}

    </div>
  );
}

export default HomeDetails;
