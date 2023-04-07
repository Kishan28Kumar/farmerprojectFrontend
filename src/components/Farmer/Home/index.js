import  Axios  from 'axios';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './index.css';

var CryptoJS = require('crypto-js');

function Home (){

    var token = window.localStorage.getItem('farmerToken');
    var farmerID = window.localStorage.getItem('farmerID');
    
    
    function autoLogin(){
        if(token !== null){
            var decryptfarmerToken = CryptoJS.AES.decrypt(token,farmerID);
            console.log(decryptfarmerToken);
            console.log(token);
            Axios.post('https://farmer-77de.onrender.com/farmerAutoLogin',{
                Email:decryptfarmerToken.toString(CryptoJS.enc.Utf8)
            }).then(function(succ){
                if(succ.data == false){
                    alert("Email or Password is Incorrect");
                }else{
                    window.location.href="/Farmer/account";
                }
            })
        }
    }

    useEffect(()=>{
        autoLogin();
    },[])
    return (
        <>
            <div className="home-bg">
                <div className='home-container'>
                <div className='home-text-content'>
                    <h3>Hello Farmer, Welcome to</h3>
                    <h1>Farmer Marketplace</h1>
                    <p>Register Now and you can sell your harvest online here</p>
                </div>
                <div className='home-login-signup'>
                    <Link to ='/Farmer/farmerlogin' className='login-button button'><button>Login</button></Link>
                    <Link to ='/Farmer/farmerregister' className='register-button button'><button>Register</button></Link>
                </div>
                </div>
            </div>
        </>
    )
}

export default Home;