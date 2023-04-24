import React, {useState} from 'react';
import './PropertyFilter.css';

function PropertyFilter({ onFilterChange }) {
  const [filter, setFilter] = useState({
    minBedroom: '',
    minBathroom: '',
    maxPrice: '',
    homeType: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
    onFilterChange({ ...filter, [name]: value });
  };

  return (
    <div className="filter-container">
      <div className="min-bedroom">
        <h3>Min Bedroom</h3>
        <select name="minBedroom" value={filter.minBedroom} onChange={handleChange}>
          <option value="">Any bedroom</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div className="min-bathroom">
        <h3>Min Bathroom</h3>
        <select name="minBathroom" value={filter.minBathroom} onChange={handleChange}>
          <option value="">Any bathroom</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div className="max-price">
        <h3>Max Price</h3>
        <select name="maxPrice" value={filter.maxPrice} onChange={handleChange}>
          <option value="">Any price</option>
          <option value="1000">$1,000</option>
          <option value="2000">$2,000</option>
          <option value="3000">$3,000</option>
          <option value="4000">$4,000</option>
          <option value="5000">$5,000</option>
        </select>
      </div>

      <div className="home-type">
        <h3>Home Type</h3>
        <select name="homeType" value={filter.homeType} onChange={handleChange}>
          <option value="">Any type</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Detached</option>
          <option value="townhouse">Semi-Detached</option>
        </select>
      </div>
    </div>
  );
}

export default PropertyFilter;
