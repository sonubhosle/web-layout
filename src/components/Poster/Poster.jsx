import React from 'react'
import './Style.css'

const Poster = () => {
  return (
    <div className='poster-section '>
      <div className="poster-image">
        <img src="https://i.postimg.cc/htk44zWK/background-2.jpg" alt="bg" />
      </div>
      <div className="poster-content flex justify-center">
        <h2>eat healthy & organic vegitables</h2>
        <p>
          Organic products are items that are grown, produced, or processed without the use of synthetic pesticides, fertilizers, genetically modified organisms (GMOs), antibiotics, or artificial additives. </p>
      </div>

    </div>
  )
}

export default Poster