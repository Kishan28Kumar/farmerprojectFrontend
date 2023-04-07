import React from 'react'
import { NavLink,Link } from 'react-router-dom';

const Nav = () => {

    function logout(){
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('buyerID');
        window.location.href="/Buyer";
    }

    const gotoProfile = () =>{
        window.location.href="/Buyer/account/profile";
    }

    const gotoHome = () =>{
        window.location.href="/Buyer/account";
    }

    const gotoProductRegister = () =>{
        window.location.href="/Buyer/account/productrequest";
    }
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
                            <li><a onClick={gotoProductRegister}>Add Request</a></li>
                            <li><a onClick={gotoProfile}>My Profile</a></li>
                            <li><button onClick={logout}>Logout</button></li>
                        </ul>

                        
                    </div>
                </div>
            </nav>
        </>
  )
}

export default Nav;