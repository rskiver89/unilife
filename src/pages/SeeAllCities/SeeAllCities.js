import React, {useState, useEffect} from 'react';
import CityCard from '../../components/CityCard/CityCard';
import './SeeAllCities.css';
import Banner from '../../components/Banner/Banner';

function SeeAllCities({cities}) {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  return (
    <div>
      <Banner mainText='Student Accomodations' subText='UniLife have student accommodation available across the UK.
      Whatever you’re after, we can help you find the right student accommodation for you. ' />

      <div className='cities-container'>
        <h1 style={{marginBottom: '32px'}}>Search by city</h1>
        <div className='cities-grid'>
                {
          cities?.map((item) => {
            return (
              <div className='all-cities-card' key={item.name}> 
                <CityCard city={item} fontColor='black' />
              </div>
            );
          })
        }
      </div>
      </div>
    </div>
  )
}

export default SeeAllCities
