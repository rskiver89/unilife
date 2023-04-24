import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyFilter from '../../components/PropertyFilter/PropertyFilter';
import Banner from '../../components/Banner/Banner';
import './CityDetails.css';
import { Link, useParams } from 'react-router-dom';
import { MdOutlineBedroomParent, MdOutlineBathtub, MdHome } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import Students from '../../assets/student-details.png';

function CityDetails() {
  const { city } = useParams();
  const [properties, setProperties] = useState([]);
  const [currentCity, setCurrentCity] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getCityDetails(city);
    getAllProperties(city);
  }, [city]);

  const getCityDetails = async (city) => {
    let currentPage = 1;
    let allCities = [];

    while (true) {
      const response = await axios.get(
        `https://unilife-server.herokuapp.com/cities?page=${currentPage}`
      );
      if (response.data.response.length === 0) {
        break;
      }

      allCities = allCities.concat(response.data.response);
      currentPage++;
    }

    const foundCity = allCities.find(
      (item) => item.name.toLowerCase() === city.toLowerCase()
    );
    setCurrentCity(foundCity);
    setLoading(false);
  };

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
    setLoading(false);
  };

  const [filter, setFilter] = useState({
    minBedroom: '',
    minBathroom: '',
    maxPrice: '',
    homeType: '',
  });

  // Filter properties based on the filter data
  const filteredProperties = properties.filter((property) => {
    const { minBedroom, minBathroom, maxPrice, homeType } = filter;
    return (
      (!minBedroom || property.bedroom_count >= parseInt(minBedroom)) &&
      (!minBathroom || property.bathroom_count >= parseInt(minBathroom)) &&
      (!maxPrice || property.rent <= parseInt(maxPrice)) &&
      (!homeType || property.property_type.toLowerCase() === homeType.toLowerCase())
    );
  });

  // Callback function to handle filter change from PropertyFilter component
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div>
      <Banner mainText='Search Accomodation' subText='Whatever you’re after, we can help you find the right student accommodation for you. ' />

      <PropertyFilter onFilterChange={handleFilterChange} />
      <div className="properties-wrapper">
        <h2 className="homes-in-city">
          {filteredProperties?.length} Homes in {currentCity?.name}
        </h2>

        <div className='properties-container'>
          {filteredProperties.map((property) => (
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
                    <h4 style={{fontWeight: '500'}}>View Home</h4>
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
              <p style={{margin: '24px 0 12px 0'}}>{currentCity?.student_life}</p>
              <p>{currentCity?.universities}</p>
            </>
          )}
        </div>
        <img src={Students} className='student-image' />
      </div>
    </div>
  </div>
);
}

export default CityDetails;