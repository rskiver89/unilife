import React, {useState, useEffect} from 'react';
import '../styles/CityCard.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

function CityCard() {
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
    <div className='cities-container'>
    <h2 style={{marginBottom: '64px'}}>Student accommodations in our top cities</h2>
    <div className='cities-grid'>
      {
                cities.map((item) => {
                    return <div className='city-item'> 
                    <img src={item.image_url} alt={item.name}  />
                    <div className='city-name'>
                      <h3>{item.name}</h3>
                      <p style={{textAlign: 'center', margin: '8px'}}>{item.property_count} properties</p>
                    </div>
                    </div>
                })
            }
                  {/* <Link to='/see-all-cities' ><button>See all cities</button></Link> */}
    </div>
  </div>
  );
};

export default CityCard;
