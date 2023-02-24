import React,{useState} from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {


  return (
    <div>
      <BrowserRouter>
      <Header />
      <Homepage />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
