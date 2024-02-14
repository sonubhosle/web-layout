import React from 'react'
import { GiFruitBowl } from "react-icons/gi";

const Cards = ({data}) => {
  return (
    <div class="container">
    <div class="product-grid">
        {
            data.map((e) => {
                return (
                    <div class="product">
                        <div className="info">
                        <div className="icon"> <GiFruitBowl size={25}/></div>
                            <h3>{e.title}</h3>
                            <p>{e.desc}</p>
                            <p>{e.long}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
</div>
  )
}

export default Cards