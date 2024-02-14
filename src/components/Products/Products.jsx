import React from 'react'
import './Style.css'

const Products = ({ data }) => {
    return (
        <div class="container">
            <div class="product-grid">
                {
                    data.map((e) => {
                        return (
                            <div class="product">
                                <img src={e.image} alt={e.title} />
                                <div className="info">
                                    <h3>{e.title}</h3>
                                    <p>{e.desc}</p>
                                    <button className="buy">Add To Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products