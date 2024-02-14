import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
import { GiFruitBowl } from "react-icons/gi";

const Footer = () => {
  return (
    <footer>
    <div className="footer-image">
      <img src="https://i.postimg.cc/15YmPV93/Whats-App-Image-2024-02-13-at-10-16-09-PM.jpg" alt="footer" />
    </div>
    <div className="overlay">
       <div className="content">
        <div className="footer-grid">
        <div className="box">
          <h3>Organic</h3>
          <p>Organic products are items that are grown, produced, or processed without the use of synthetic pesticides, fertilizers.</p>
          <div className="line"></div>
          </div>
          <div className="box">
            <h3>Support</h3>
            <Link to='/customer'>24/7 Support</Link>
            <Link to='/products'>Contact</Link>
            <Link to='/contact'>Feedback</Link>
            <Link to='/about'>Help</Link>
          </div>
          <div className="box">
            <h3>Term & Conditions</h3>
            <p> Users agree to these terms by accessing or using the product or service. <span>Term</span> & <span>condition</span> or <span>privacy policies</span></p>
          </div>
          <div className="box">
            <h3>Copyright</h3>
            <p>Eat our organic <br /> products</p>
            <div className="line"></div>
            <div className="copyright flex">
              <p>&copy;organic.com - 2024</p>
              <Link><GiFruitBowl size={28} /></Link>
            </div>
            <div className="line"></div>
          </div>

        </div>
       </div>
    </div>
    </footer>
  )
}

export default Footer