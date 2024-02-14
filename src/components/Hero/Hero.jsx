import React from 'react'
import './Style.css'

const Hero = () => {
  return (
    <div className='hero-section '>
      <div className="bg-image">
        <img src="  https://i.postimg.cc/h4x19nQ2/hero-background.jpg" alt="bg" />
      </div>
      <div className="hero-content flex justify-center">
        <h2>100% Organic</h2>
        <p>
          Organic products are items that are grown, produced, or processed without the use of synthetic pesticides, fertilizers, genetically modified organisms (GMOs), antibiotics, or artificial additives. </p>
        <button>Buy Products</button>
      </div>

    </div>
  )
}

export default Hero