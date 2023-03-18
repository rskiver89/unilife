import React,{useState} from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  const baseUrl = 'https://unilife-server.herokuapp.com/'


  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage baseUrl={baseUrl}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
