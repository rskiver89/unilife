import React,{useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import axios from 'axios';

function App() {
  const [cities, setCities] = useState([]);

  useEffect(()=>{
    axios.get('https://unilife-server.herokuapp.com/cities?limit=9')
    .then(res=>{
      console.log(res.data.response)
      setCities(res.data.response)
    })
    .catch(err => console.log(err))
  }, [])



  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage cities={cities} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
