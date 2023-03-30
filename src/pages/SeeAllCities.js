import React from 'react'
import CityCard from '../components/CityCard'
import '../styles/CityCard.css'
import '../styles/SeeAllCities.css'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

function SeeAllCities({cities}) {


  return (
    <div>
        <Banner mainText='Student Accomodations' subText='UniLife have student accommodation available across the UK.
Whatever you’re after, we can help you find the right student accommodation for you. ' />

    <div className='cities-container'>
        <div className='cities-grid'>
      {
        cities?.map((item) => {
            return (
                <Link className='city-link'>
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
