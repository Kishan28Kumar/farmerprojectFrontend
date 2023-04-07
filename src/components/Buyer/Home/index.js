import {Link} from 'react-router-dom';
import './index.css';
import Axios  from 'axios';
import { useEffect} from 'react';

var CryptoJS = require('crypto-js');
function Home(){
    var token = window.localStorage.getItem('token');
    const ID = window.localStorage.getItem('buyerID');
    
    function autoLogin(){
        if(token !== null){
            var decryptToken = CryptoJS.AES.decrypt(token,ID).toString(CryptoJS.enc.Utf8);
            Axios.post('https://farmer-77de.onrender.com/buyerAutoLogin',{
                Email:decryptToken,
                ID:ID
            }).then(function(succ){
                if(succ.data == false){
                    alert("Email or Password is Incorrect");
                }else{
                    window.location.href="/Buyer/account";
                }
            })
        }
    }

    useEffect(()=>{
        autoLogin();
    },[])
    return (
        <>
            <div className="buyer-home-bg">
                <div className='home-container'>
                <div className='home-text-content buyer-home-text'>
                    <h3>Hello Buyer, Welcome to</h3>
                    <h1>Farmer Marketplace</h1>
                    <p>Register Now and you can buy farm products</p>
                </div>
                <div className='home-login-signup'>
                    <Link to ='/Buyer/buyerlogin' className='login-button button buyer-auth-btn'><button>Login</button></Link>
                    <Link to ='/Buyer/buyerregister' className='buyer-register-button button buyer-auth-btn'><button>Register</button></Link>
                </div>
                </div>
            </div>
        </>
    )
}

export default Home;