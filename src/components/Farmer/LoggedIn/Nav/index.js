import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import "./index.css";

const Nav = () => {

    function logout(){
        window.localStorage.removeItem('farmerToken');
        window.localStorage.removeItem('farmerID');
        window.location.href="/Farmer";
    }

    const gotoProfile = () =>{
        window.location.href="/Farmer/account/profile";
    }

    const gotoHome = () =>{
        window.location.href="/Farmer/account";
    }

    const gotoProductRegister = () =>{
        window.location.href="/Farmer/account/productregister";
    }

    // const gotoContact =()=>{
    //     window.location.href="/Farmer/account/contact";
    // }

  return (
    <>
            <nav className="loggedin-navbar">
                <div className="loggedin-navbar-container">
                    <NavLink exact="true" to="/" className="logo-link">
                        <h1 className="logo-h1"><span>F</span>armer Market</h1>
                    </NavLink>
                    <div>
                        <ul>
                            <li><a onClick={gotoHome}>Home</a></li>
                            <li><a onClick={gotoProductRegister}>Add a Product</a></li>
                            <li><a onClick={gotoProfile}>My Profile</a></li>
                            {/* <li><a onClick={gotoContact}>Contact</a></li> */}
                            <li><button onClick={logout}>Logout</button></li>
                        </ul>

                        
                    </div>
                </div>
            </nav>
        </>
  )
}

export default Nav;