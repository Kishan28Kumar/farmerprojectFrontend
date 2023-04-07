import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "./index.css";
import { useState } from "react";
import Axios from 'axios';


var CryptoJS = require('crypto-js');
const Login = () => {

    const [Email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    function login(e){
        e.preventDefault();
        if(Email == " " || pass == " "){
            alert("please enter correct credentials");
        }else{
            Axios.post('https://farmer-77de.onrender.com/farmerLogin',{
                Email:Email,
                Password:pass
            }).then(function(succ){
                if(succ.data == false){
                    alert("Email or Password is Incorrect");
                }else{
                    var encryptfarmerToken = CryptoJS.AES.encrypt(succ.data.Email,succ.data._id);
                    window.localStorage.setItem('farmerToken',encryptfarmerToken);
                    window.localStorage.setItem('farmerID',succ.data._id);
                    window.location.href="/Farmer/account";
                }
            })
        }   
        
    }

  return (
    <>
      <div className="login-container">
                    <div className="login-nav">
                    <NavLink to="/Farmer" exact="true" className="login-to-home-link">
                        <h1 className="logo-h1"><span>F</span>armer Market</h1>
                    </NavLink>

                    <div className="icon-container">
                        <FaUser size={100} className="user-icon" />
                        <p>New Here? 
                            <NavLink to="/Farmer/farmerregister" exact="true">
                                <div className="product-submit">
                                    <button className="login-btn">Register</button>
                                </div>
                            </NavLink>
                        </p>
                    </div>

                </div>

                <div className="login-form-container">
                    <h1>Farmer Login</h1>
                    <form className="login-form">

                        <div className="email-field-box input-box">
                            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={Email}/>
                        </div>

                        <div className="password-field-box input-box">
                            <input type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)} value={pass} />
                        </div>

                        <div className="login-btn-box input-box">
                            <button onClick={login}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
    </>
  );
};

export default Login;
