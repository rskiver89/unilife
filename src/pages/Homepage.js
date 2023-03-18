import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/Homepage.css'
import '../styles/Banner.css'
import Banner from '../components/Banner'
import SearchCity from '../components/SearchCity'
import CityCard from '../components/CityCard'

// Images
import search from '../assets/Vector.png'
import compare from '../assets/Vector-2.png'
import bills from '../assets/Vector-3.png'
import person from '../assets/person.png'
import bestSelection from '../assets/Vector-4.png'
import yourFavorite from '../assets/Vector-5.png'

function Homepage({baseUrl}) {
  const [cities, setCities]=useState([])


  const instructionIconStyle = {
    width:'32px', 
    height: '32px', 
    marginTop: '12px'
  }


  useEffect(() => {
    axios.get(`${baseUrl}cities?limit=9`)
    .then(res=>{
      setCities(res.data.results)
    })
    .catch(err=> console.log(err))
  }, [])


  return (
    <div className='homepage-container'>

      <div className='banner-container'>
        <Banner mainText='Find student homes' mainTextTwo='with bills included' subText='A simple and faster way to search for student accommodation' />
      </div>

      <SearchCity />

      <div className='cities-container'>
        {cities.map(city => (
          <CityCard key={city.id} city={city} />
        ))}
      </div>

      <div className='compare-container'>

        <h2>Compare all inclusive student homes.</h2>

        <div className='compare-content'>

          <div className='compare-item'> 
            <img src={search} className='compare-icon' alt='Search' />
            <h3>Search</h3>
            <p>Find your dream home in the perfect area near your university.</p>
          </div>

          <div className='compare-item'>
            <img src={compare} className='compare-icon' alt='Search' />
            <h3>Compare</h3>
            <p>Compare student accommodation to find the right home for you.</p>
          </div>

          <div className='compare-item'>
            <img src={bills} className='compare-icon' />
            <h3>Bills Included</h3>
            <p>Bills are included in all rent prices. No hidden fees.</p>
          </div>

        </div>
      </div>

        <div className='instructions-container'>

          <div className='instructions-content-container'>
            <div className='instructions-content'>
              <img src={bestSelection} style={instructionIconStyle} />
              <div className='instructions-content-text'>
                <h3>Best selection</h3>
                <p>Best selection of student accommodations. Never been easier to find a home that’s right for you.</p>
              </div>
            </div>

            <div className='instructions-content'>
              <img src={yourFavorite} style={instructionIconStyle} />
              <div className='instructions-content-text'>
                <h3>Your favorite</h3>
                <p>Shortlist your favourite properties and send enquiries in one click.</p>
              </div>
            </div>
            <button className='search-compare-btn'>Search & Compare</button>
          </div>

          <img src={person} alt='Person' style={{width: '250px'}} />

        </div>

      
    </div>
  )
}

export default Homepage
