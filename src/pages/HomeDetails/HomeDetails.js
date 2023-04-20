import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropertyImages from '../../components/PropertyImages/PropertyImages';
import BedroomPrices from '../../components/BedroomPrices/BedroomPrices';
import PropertySummary from '../../components/PropertySummary/PropertySummary';
import ViewingModal from '../../components/Modals/ViewingModal';
import './HomeDetails.css'
import {HiOutlineCheck} from 'react-icons/hi'


function HomeDetails() {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);
  const [keyFeatures, setKeyFeatures] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
};

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
          <PropertySummary property={property} onBookViewingClick={toggleModal} />

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
{property && (
      <ViewingModal
        isOpen={isModalOpen}
        address={`${property.address.street}, ${property.address.city}, ${property.address.postcode}`}
        onClose={toggleModal}
      />
)}
    </div>
  );
}

export default HomeDetails;
