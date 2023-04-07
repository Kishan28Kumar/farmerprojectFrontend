import { NavLink } from "react-router-dom";
import {FaUser, FaWindows} from 'react-icons/fa';
import './index.css';
import { useEffect, useState } from "react";
import Axios from 'axios';

function Register(){
    const [Name,setName] = useState("");
    const [Email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [pass, setPass] = useState("");
    const [cPass, setCPass] = useState("");
    const [cityName,setCityName] = useState("");
    const [stateName,setStateName] = useState("");
    const [pinCode,setPinCode] = useState("");
    // const [otp,setOtp] = useState(111999);



    const handleSubmit = (e)=>{
        e.preventDefault();
        var checkEmail = /^[a-zA-Z0-9._-]+@[a-z]+\.[a-z]{2,3}$/;
        if(Name==="" || Name===" "){
            alert("Name Field can't be Empty");
        }else if(contact==="" || contact===" "){
            alert("Contact Field can't be Empty");
        }else if(parseInt(contact)>9999999999 || parseInt(contact)<1111111111){
            alert("Contact must be be 10 digit long");
            
            document.querySelector("#contact").focus();
        }else if(!checkEmail.test(Email)){
            alert("Please enter a valid email address");
        }else if(pass.length < 8){
            alert("Password should be 8 character long");
        }else if(cPass !== pass){
            alert("Password does not match");
        }else if(cityName==="" || cityName===" "){
            alert("City Name Field can't be Empty");
        }else if(stateName==="" || stateName===" "){
            alert("State Name Field can't be Empty");
        }else if(pinCode==="" || pinCode===" "){
            alert("Pin Code Field can't be Empty");
        }else{
            Axios.post('https://farmer-77de.onrender.com/checkFarmer',{
                Email:Email
            }).then(function(succ){
                if(succ.data == true ){
                    insertFarmer();
                }else{
                    alert(Email + " already exists");
                }
            })
        }
    }



    function insertFarmer(){
        Axios.post('https://farmer-77de.onrender.com/registerFarmer',{
            Name:Name,
            Email:Email,
            Contact:contact,
            Password:pass,
            CityName:cityName,
            StateName:stateName,
            PinCode:pinCode
        }).then(function(succ){
            if(succ.data == true){
                alert(Name + "Registered Successfully")
                window.location.href="/Farmer/farmerlogin";
            }else{
                alert("Something went wrong");
            }
        })
    }

    function checkContact(e){
        if(parseInt(contact)<1|| parseInt(contact)>9999999999){
            document.querySelector('#pContactError').style.display="block";
            document.querySelector('#contact').style.backgroundColor="red";
            setTimeout(()=>{
                document.querySelector('#contact').style.backgroundColor="white";
                document.querySelector('#contact').style.transition="background-color 0.5s ease-in";
            },1000)
            document.querySelector("#contact").focus();
        }else{
            document.querySelector('#pContactError').style.display="none";
        }
    }

    // function sendOtp(e){
    //     e.preventDefault();
    //     setOtp(Math.floor(100000 + Math.random()*900000)) ;
    //     console.log(otp);
    // }

    useEffect(()=>{
    },[]);
    return (
        <>
            <div className="register-container">
                    <div className="register-nav">
                    <NavLink to="/Farmer" exact="true" className="register-to-home-link">
                        <h1 className="logo-h1"><span>F</span>armer Market</h1>
                    </NavLink>

                    <div className="icon-container">
                        <FaUser size={100} className="user-icon" />
                        <p>Already have an account? 
                            <NavLink to="/Farmer/farmerlogin" exact="true">
                                <div className="product-submit">
                                    <button className="login-btn">Login</button>
                                </div>
                            </NavLink>
                        </p>
                    </div>

                </div>

                <div className="register-form-container">
                    <h1>Farmer Register</h1>
                    <form className="register-form">
                        <div className="name-field-box input-box">
                            <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} value={Name} />
                        </div>

                        <div className="email-field-box input-box">
                            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={Email} />
                        </div>

                        

                        <div className="contact-field-box input-box">
                            <p id="pContactError"><b>Contact must be 10 digit long</b></p>
                            <input type="number" id='contact' onKeyUp={(e)=>checkContact(e)} placeholder="Contact" onChange={(e)=>setContact(e.target.value)} value={contact}/>
                        </div>

                        <div className="password-field-box input-box">
                            <input type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)} value={pass} />
                        </div>

                        <div className="password-field-box input-box">
                            <p id="cpnot" style={{display:"none"}}>Password doesn't match</p>
                            <input 
                                type="password" 
                                placeholder="Confirm Password" 
                                onChange={(e)=>{
                                    setCPass(e.target.value);
                                    var cpnot = document.querySelector('#cpnot');
                                    if(e.target.value !== pass){
                                        cpnot.style.display = "block";
                                        cpnot.style.color="red";
                                    }else{
                                        cpnot.style.display="none";
                                    }
                                }} 
                                value={cPass}
                            />
                        </div>

                        <div className="email-field-box input-box">
                            <input type="text"  placeholder="City Name" onChange={(e)=>setCityName(e.target.value)}/>
                        </div>

                        <div className="email-field-box input-box">
                            <input type="text" placeholder = "State Name" onChange={(e)=>setStateName(e.target.value)} />
                        </div>

                        <div className="email-field-box input-box">
                            <input type="number" placeholder="Pin Code" onChange={(e)=>setPinCode(e.target.value)} />
                        </div>



                        <div className="register-btn-box input-box">
                            <button onClick={handleSubmit}>Register</button>
                        </div>

                        {/* <div className="register-btn-box input-box">
                            <button onClick={(e)=>sendOtp(e)}>generate OTP</button>
                        </div> */}
                    </form>
                </div>
            </div>
        </>
    )
}


export default Register;