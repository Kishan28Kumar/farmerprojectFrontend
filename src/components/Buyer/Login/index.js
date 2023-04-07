import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "./index.css";
import { useState } from "react";
import Axios from 'axios';


var CryptoJS = require('crypto-js');
const Login = () => {
    const [Email,setEmail] = useState("");
    const [pass,setPass] = useState("");

    const login = (e)=>{
        e.preventDefault();
        if(Email == " " || pass == " "){
            alert("Please Enter Correct Credentials");
        }else{
            Axios.post('https://farmer-77de.onrender.com/buyerLogin',{
                Email:Email,
                Password:pass
            }).then(function(succ){
                if(succ.data == false){
                    alert("Email or Password is incorrect");
                }else{
                    var encryptToken = CryptoJS.AES.encrypt(succ.data.Email,succ.data._id);
                    window.localStorage.setItem('token',encryptToken);
                    window.localStorage.setItem('buyerID',succ.data._id);
                    window.location.href="/Buyer/account";
                }
            })
        }
    }
  return (
    <>
      <div className="register-container">
                    <div className="register-nav buyer-register-nav">
                    <NavLink to="/Buyer" exact="true" className="login-to-home-link">
                        <h1 className="logo-h1"><span>F</span>armer Market</h1>
                    </NavLink>

                    <div className="icon-container">
                        <FaUser size={100} className="user-icon" />
                        <p>New Here? </p>
                            <NavLink to="/Buyer/buyerregister" exact="true">
                                <div className="product-submit">
                                    <button className="login-btn">Register</button>
                                </div>
                            </NavLink>
                        
                    </div>

                </div>

                <div className="register-form-container buyer-register-form-container">
                    <h1>Buyer Login</h1>
                    <form className="login-form">

                        <div className="email-field-box input-box">
                            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={Email} />
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
