import Nav from '../Nav';
import './index.css';
import {FaUser} from 'react-icons/fa';
import Axios from 'axios';
import { useEffect, useState } from 'react';

var CryptoJS = require('crypto-js');

function FarmerProfile(){
    const farmerEmail = window.localStorage.getItem('farmerToken');
    const farmerID = window.localStorage.getItem('farmerID');
    var decryptfarmerToken = CryptoJS.AES.decrypt(farmerEmail,farmerID).toString(CryptoJS.enc.Utf8);
    const [farmer,setFarmer] = useState([]);
    function getFarmer(){
        Axios.post('https://farmer-77de.onrender.com/getFarmer',{
            Email:decryptfarmerToken
        }).then(function(succ){
            setFarmer(succ.data);
        })
    }

    useEffect(()=>{
        getFarmer();
    },[])
    return (
        <>  
            <Nav />
            <div className="profile-container">
                <div className="profile-left">
                    <div className="profile-image-container">
                        <FaUser size={100} className='user-icon' />
                    </div>
                    <div className="user-name-container">
                        <h3>Name: {farmer.Name}</h3>
                        <h3>Email: {farmer.Email}</h3>
                        <div className="product-submit">
                            <button onClick={()=>{window.location.href="/Farmer/account/profile/update"}}>Update</button>
                            <button onClick ={()=>{window.location.href="/Farmer/account/profile/products"}}>My Products</button>
                        </div>
                    </div>
                </div>
                <div className="profile-right">
                    <div className="user-detail-container">
                        <p><b>Name:</b> {farmer.Name}</p>
                        {/* <p>Age: {farmer.Age}</p> */}
                        <p><b>ID:</b> {farmer._id}</p>
                        <p><b>Email:</b> {farmer.Email}</p>
                        <p><b>Contact: </b>{farmer.Contact}</p>
                        <p><b>Address:</b> {farmer.CityName + " " + farmer.StateName + " " + farmer.PinCode}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FarmerProfile;