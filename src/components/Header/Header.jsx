import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { CgShoppingBag } from "react-icons/cg";
import './Style.css'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='flex'>
        <div className="logo">
            <Link to='/'>Organic</Link>
        </div>
       <div className="right flex">
        <div className={`overlay ${isOpen ? 'open' : ''}`} ></div>
       <div className={`menus flex ${isOpen ? 'open' : ''}`} >
            <Link to={'/'} className='link-name'>Home</Link>
            <Link to={'/products'} className='link-name'>Products</Link>
            <Link to={'/about'} className='link-name'>About</Link>
            <Link to={'/contact'} className='link-name'>Contact</Link>
            <div className='menu-close' onClick={toggleModel}><IoClose size={35} /></div>

        </div>
        <div className="buttons flex">
        <Link to={'/cart'} className='link-name icon flex'><CgShoppingBag size={30} color='#B2D42F' /></Link>
        <div className='menu-btn' onClick={toggleModel}><IoMdMenu size={35} /></div>
        </div>
       </div>

    </header>
  )
}

export default Header