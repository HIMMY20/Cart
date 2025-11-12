import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart ,FaSearch } from "react-icons/fa";
import '../Components/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaRegHeart, FaHeart } from "react-icons/fa";


import Data from './Context';

const Navbar = () => {
    let {demos,count,liked} = useContext(Data)
    let totalqty = demos.reduce((total,item) =>
        total + (count[item.id] || 1),
    0)

    let totallike = liked.reduce((total,item) =>
        total + (count[item] || 1),
    0)

    let totalprice = demos.reduce((total,item)=>
    total + item.price * (count[item.id] || 1),
    0)

    let [showSearch,setShowSearch] = useState(false);

    
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light px-3">
      <div className="container-fluid">

        
        {
          !showSearch ? (
            <>
          <Link onClick={() => setShowSearch(true)} className="navbar-brand">
          <FaSearch />
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          
          >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="favt" className="nav-link"><FaRegHeart/> <sup>{totallike}</sup> </Link>
            </li>
          </ul>



          <div className="d-flex align-items-center gap-3">
            <Link to="cart" className="nav-link text-dark">
              <FaShoppingCart /> <sup>{totalqty}</sup>
            </Link>
            <Link to="login"> <button className='login'> Login </button> </Link>
            <Link to="register"> <button className='register'> Register </button> </Link>
          </div>
        </div>
          </>
      
      ):(    
            <input type="search" name="search" id="search" placeholder='Search...' autoFocus onBlur={() => setShowSearch(false)} style={{width : '100%'}}  />
          )
        }

        
      </div>
    </nav>
    </>
  )
}

export default Navbar