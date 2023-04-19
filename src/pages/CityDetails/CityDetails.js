import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyFilter from '../../components/PropertyFilter/PropertyFilter';
import Banner from '../../components/Banner/Banner';
import './CityDetails.css';
import { Link, useParams } from 'react-router-dom';
import { MdOutlineBedroomParent, MdOutlineBathtub, MdHome } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import Students from '../../assets/student-details.png';

function CityDetails({ cityDetails }) {
  const { city } = useParams();
  const [properties, setProperties] = useState([]);
  const currentCity = cityDetails.find(
    (item) => item.name.toLowerCase() === city.toLowerCase()
  );

  useEffect(() => {
    getAllProperties(city);
  }, [city]);

  const getAllProperties = async (city) => {
    let currentPage = 1;
    let allProperties = [];

    while (true) {
      const response = await axios.get(
        `https://unilife-server.herokuapp.com/properties?page=${currentPage}`
      );
      if (response.data.data.length === 0) {
        break;
      }

      allProperties = allProperties.concat(response.data.data);
      currentPage++;
    }

    // Filter properties
    const cityProperties = allProperties.filter(
      (property) => property?.address?.city.toLowerCase() === city.toLowerCase()
    );

    setProperties(cityProperties);
  };

  return (
    <div>
      <Banner mainText='Search Accomodation' subText='Whatever you’re after, we can help you find the right student accommodation for you. ' />

      <PropertyFilter />
      <div className='properties-wrapper'>
      <h2 className='homes-in-city'>{properties.length} Homes in {currentCity?.name}</h2>


        <div className='properties-container'>
          {properties.map((property) => (
            <div key={property?._id} className='property-details-container'>
              <img src={property?.images[0]} />
              <div className='property-details'>
                <div className='price'>
                  <h4>$ {property?.rent}</h4>
                  <p style={{ fontSize: '10px' }}>pppw including bills</p>
                </div>
                <div className='bedroom-bathroom'>
                  <div className='bedroom'>
                    <MdOutlineBedroomParent style={{ marginRight: '4px' }} />
                    <p>{property?.bedroom_count}</p>
                  </div>
                  <div className='bathroom'>
                    <MdOutlineBathtub style={{ marginRight: '4px' }} />
                    <p>{property?.bathroom_count}</p>
                  </div>
                </div>
              </div>
              <div className='more-details'>
                <div className='property-type-container'>
                  <div className='property-type'>
                    <p>{property?.property_type}</p>
                    <p>{property?.furnished}</p>
                  </div>
                  <div className='location'>
                    <IoLocationOutline />
                    <address>
                      {property?.address?.street}, {property?.address?.city}, {property?.address?.postcode}
                    </address>
                  </div>
                </div>
                <div className='view-home-container'>
                  <Link to={`/home-details/${property?._id}`} style={{ textDecoration: 'none' }}>
                    <div className='view-home'>
                    <MdHome size={20}/>
                    <h4>View Home</h4>
                    </div>
                  </Link>
                </div>
              </div>
           
            </div>
        ))}
      </div>
    </div>
<div className='student-wrapper'>
    <div className='student-container'>
      <div className='student-info'>
        {currentCity && (
          <>
            <h2 style={{fontWeight: '500'}}>Being a student in {currentCity?.name}</h2>
            <p>{currentCity?.student_life}</p>
            <p>{currentCity?.universities}</p>
          </>
        )}
      </div>
      <img src={Students} style={{ width: '40%' }} />
    </div>
    </div>
  </div>
);
}

export default CityDetails;