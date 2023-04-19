import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import SeeAllCities from './pages/SeeAllCities/SeeAllCities';
import CityDetails from './pages/CityDetails/CityDetails';
import HomeDetails from './pages/HomeDetails/HomeDetails';
import axios from 'axios';

function App() {
  const [firstNineCities, setFirstNineCities] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [cityDetails, setCityDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCities();
  }, []);

  const getAllCities = async () => {
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
      setCityDetails(response.data.response);
      currentPage++;
    }

    setFirstNineCities(allCities.slice(0, 9));
    setAllCities(allCities);
    setLoading(false);
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Routes>
            <Route path='/' element={<Homepage cities={firstNineCities} />} />
            <Route path='/see-all-cities/' element={<SeeAllCities cities={allCities} />} />
            <Route path='/city-details/:city' element={<CityDetails cityDetails={cityDetails} />} />
            <Route path='/home-details/:propertyId' element={<HomeDetails />} />
          </Routes>
        )}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
