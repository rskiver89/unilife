import React from 'react'

function CityCard({ city }) {
  return (
    <div className="city-card">
      <img src={city.image} alt={city.name} className="city-image" />
      <h3 className="city-name">{city.name}</h3>
      <p className="city-description">{city.description}</p>
    </div>
  )
}

export default CityCard
