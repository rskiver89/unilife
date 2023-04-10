import React,{useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import axios from 'axios';
import SeeAllCities from './pages/SeeAllCities';
import CityDetails from './pages/CityDetails';
import HomeDetails from './pages/HomeDetails';

function App() {
  const [cities, setCities] = useState([]);

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
      currentPage++;
    }

    setCities(allCities);
  };



  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage cities={cities} />} />
          <Route path='/see-all-cities/' element={<SeeAllCities cities={cities} />} />
          <Route path='/city-details/:city' element={<CityDetails />} />
          <Route path='/home-details/:propertyId' element={<HomeDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
