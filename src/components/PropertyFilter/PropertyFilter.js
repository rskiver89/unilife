import React, {useState} from 'react'
import './PropertyFilter.css'

function PropertyFilter() {

    
  return (
    <div className='filter-container'>

      <div className='min-bedroom'>
          <h3>Min Bedroom</h3>
          <select defaultValue='0'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select>
        </div>

        <div className='min-bathroom'>
          <h3>Min Bathroom</h3>
          <select defaultValue='0'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select>
        </div>

        <div className='max-price'>
          <h3>Max Price</h3>
          <select defaultValue='0'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select>
        </div>

        <div className='home-type'>
          <h3>Home Type</h3>
          <select defaultValue='0'>
              <option value="apartment">Apartment</option>
              <option value="detached">Detached</option>
              <option value="semi-detached">Semi-Detached</option>
          </select>
        </div>

  </div>
  )
}

export default PropertyFilter
