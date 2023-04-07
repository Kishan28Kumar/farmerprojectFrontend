import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import "./index.css";

const Nav = () => {
  return (
    <>
            <nav className="navbar">
                <div className="nav-content-container">
                    <NavLink exact="true" to="/" className="logo-link">
                        <h1 className="logo-h1"><span>F</span>armer Market</h1>
                    </NavLink>
                    <ul className="navbar-list farmer-nav">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><Link to="/Farmer/farmerregister" className='register-button button rg-btn'><button>SignUp</button></Link></li>
                    </ul>
                </div>
            </nav>
        </>
  )
}

export default Nav;