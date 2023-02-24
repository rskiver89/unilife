import React from 'react'
import cover from '../assets/cover-img.png'

function Banner() {
  return (
    <div>
              <img style={{width:'100%', filter:'brightness(50%)'}} src={cover} alt="Banner" />
    </div>
  )
}

export default Banner
