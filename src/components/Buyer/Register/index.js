import { NavLink } from "react-router-dom";
import {FaUser} from 'react-icons/fa';
import './index.css';
import { useState } from "react";
import Axios from 'axios';

function Register(){
    const [Name,setName] = useState("");
    const [Email,setEmail] = useState("");
    const [contact,setContact] = useState("");
    const [pass,setPass] = useState("");
    const [cpass,setCPass] = useState("");
    const [cityName,setCityName] = useState("");
    const [stateName,setStateName] = useState("");
    const [pinCode,setPinCode] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        var checkEmail = /^[a-zA-Z0-9._-]+@[a-z]+\.[a-z]{2,3}$/;
        if(Name==="" || Name===" "){
            alert("Name Field can't be Empty");
        }else if(contact==="" || contact===" "){
            alert("Contact Field can't be Empty");
        }else if(!checkEmail.test(Email)){
            alert("Please enter a valid email address");
        }else if(pass.length < 8){
            alert("password should be 8 character long");
        }else if(cpass !== pass){
            alert("password does not match");
        }else if(cityName==="" || cityName===" "){
            alert("City Name Field can't be Empty");
        }else if(stateName==="" || stateName===" "){
            alert("State Name Field can't be Empty");
        }else if(pinCode==="" || pinCode===" "){
            alert("PIN-Code Field can't be Empty");
        }else{
            Axios.post('https://farmer-77de.onrender.com/checkBuyer',{
                Email:Email
            }).then(function(succ){
                if(succ.data == true ){
                    insertBuyer();
                }else{
                    alert(Email + " already exists");
                }
            })
        }
    }


    function insertBuyer(){
        Axios.post('https://farmer-77de.onrender.com/registerBuyer',{
            Name:Name,
            Email:Email,
            Contact:contact,
            Password:pass,
            CityName:cityName,
            StateName:stateName,
            PinCode:pinCode
        }).then(function(succ){
            if(succ.data == true){
                alert(Name + "  Registered Successfully");
                window.localStorage.setItem('token',Email);
                window.location.href="/Buyer/buyerlogin";
            }else{
                alert("Something went wrong");
            }
        })
    }

    return (
        <>
            <div className="register-container">
                <div className="register-nav buyer-register-nav">
                    <NavLink to="/Buyer" exact="true" className="register-to-home-link">
                        <h1 className="logo-h1"><span>F</span>armer Market</h1>
                    </NavLink>

                    <div className="icon-container">
                        <FaUser size={100} className="user-icon" />
                        <p>Already have an account?</p> 
                            <NavLink to="/Buyer/buyerlogin" exact="true">
                                <div className="product-submit">
                                    <button className="login-btn">Login</button>
                                </div>
                            </NavLink>
                        
                    </div>

                </div>

                <div className="register-form-container buyer-register-form-container">
                    <h1>Buyer Register</h1>
                    <form className="register-form">
                        <div className="name-field-box input-box">
                            <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} value = {Name} />
                        </div>

                        <div className="email-field-box input-box">
                            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={Email} />
                        </div>

                        <div className="contact-field-box input-box">
                            <input type="number" placeholder="Contact" onChange={(e)=>setContact(e.target.value)} value={contact} />
                        </div>

                        <div className="password-field-box input-box">
                            <input type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)} value={pass} />
                        </div>

                        <div className="password-field-box input-box">
                            <p id="cpnot" style={{display:"none",color:"red"}}>Password Doesn't Match</p>
                            <input 
                                type="password" 
                                placeholder="Confirm Password" 
                                onChange={(e)=>{
                                    setCPass(e.target.value);
                                    var cpnot = document.querySelector('#cpnot');
                                    if(e.target.value !== pass){
                                        cpnot.style.display="block";
                                    }else{
                                        cpnot.style.display="none";
                                    }
                                }}
                                value={cpass}
                            />
                        </div>

                        <div className="contact-field-box input-box">
                            <input type="text" placeholder="City Name" onChange={(e)=>setCityName(e.target.value)} value={cityName} />
                        </div>

                        <div className="contact-field-box input-box">
                            <input type="text" placeholder="State Name" onChange={(e)=>setStateName(e.target.value)} value={stateName} />
                        </div>

                        <div className="contact-field-box input-box">
                            <input type="number" placeholder="PIN-Code" onChange={(e)=>setPinCode(e.target.value)} value={pinCode}/>
                        </div>

                        <div className="register-btn-box input-box">
                            <button onClick={handleSubmit}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


export default Register;