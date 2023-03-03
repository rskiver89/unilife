import React, { useState } from 'react'
import cover from '../assets/cover-img.png'
import '../styles/Banner.css'

function Banner(props) {

  const mainText = props.mainText
  const subText = props.subText

  return (
    <div className='banner'>
      <img style={{width:'100%', filter:'brightness(50%)'}} src={cover} alt="Banner" />
      <div className='banner-slogan'>
        <h1 style={{fontSize:"3em"}}>{mainText}</h1>
        <p style={{fontSize:"1em"}}>{subText}</p>
      </div>
    </div>
  )
}

export default Banner
