import React, {useState, useEffect} from 'react'
import CityCard from '../components/CityCard'
import '../styles/CityCard.css'
import '../styles/SeeAllCities.css'
import Banner from '../components/Banner'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function SeeAllCities({cities}) {


  return (
    <div>
        <Banner mainText='Student Accomodations' subText='UniLife have student accommodation available across the UK.
Whatever you’re after, we can help you find the right student accommodation for you. ' />

    <div className='cities-container'>
      <h1 style={{marginBottom: '24px'}}>Search by city</h1>
        <div className='cities-grid'>
      {
        cities?.map((item) => {
            return (
              <Link to={'/city-details/'}>
                <div className='all-cities-card'> 
                    <CityCard city={item} />

                </div>
                </Link>
            )
        })
      }
      </div>
    </div>
    </div>
  )
}

export default SeeAllCities
