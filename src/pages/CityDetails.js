import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyFilter from '../components/PropertyFilter';
import Banner from '../components/Banner';
import '../styles/CityDetails.css'
import { Link } from 'react-router-dom';
import {MdOutlineBedroomParent, MdOutlineBathtub, MdHome} from 'react-icons/md'
import {IoLocationOutline} from 'react-icons/io5'
import Students from '../assets/student-details.png'

const PropertyDetails = () => {
  const [properties, setProperties] = useState([]);

  useEffect(()=>{
    axios.get('https://unilife-server.herokuapp.com/properties')
    .then(res=>{
      console.log(res.data.data)
      setProperties(res.data.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Banner mainText='Search Accomodation' subText='Whatever you’re after, we can help you find the right student accommodation for you. ' />

      <PropertyFilter />

      <div className='properties-wrapper'>

        <h1 style={{textAlign: 'center', margin: '12px'}}>Property Details</h1>

      <div className='properties-container'>
      {properties.map(property => (
        <div key={property?._id} className="property-details-container">
          <img src={property?.images[0]} />
          <div className='property-details'>
            <div className='price'>
            <h4>$ {property?.rent}</h4>
            <p style={{fontSize: '12px'}}>pppw including bills</p>
            </div>
            <div className='bedroom-bathroom'>
              <div className='bedroom'>
                <MdOutlineBedroomParent style={{marginRight: '4px'}} />
            <p>{property?.bedroom_count}</p>
            </div>
            <div className='bathroom'>
              <MdOutlineBathtub style={{marginRight: '4px'}} />
            <p>{property?.bathroom_count}</p>
            </div>
            </div>
          </div>
          <div className='more-details'>
            <div className='property-type'>
            <p>{property?.property_type}</p>
            <p>{property?.furnished}</p>
            </div>
            <div className='location'>
              <IoLocationOutline />
              <address>{property?.address.street}, {property?.address.city}, {property?.address.postcode}</address>
            </div>
            <div className='view-home'>
              <Link to={`/home-details/`} style={{textDecoration: 'none'}} >
              <h4> <MdHome /> View Home</h4>
              </Link>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>

    <div className='student-container'>
      <div className='student-info'>
        <h2>Being a student in Lincoln</h2>
        <p>Leeds is a lively and multicultural city with a large student population. It is quite a compact city, so it is easy to get around and has a community feel. Leeds is the perfect mix of city and town life and has something to offer to anyone who calls it home.</p>
        <p>Leeds is home to three universities, the University of Leeds, Leeds Trinity University and Leeds Beckett University</p>
      </div>
      <img src={Students} style={{width: '40%'}} />
    </div>


    </div>
  );
};

export default PropertyDetails;
