import Nav from "../Nav";
import {FaUser} from "react-icons/fa";
import './index.css';
import  Axios  from "axios";
import { useEffect, useState } from "react";

var CryptoJS = require('crypto-js');
function BuyerProfile(){
    const buyerEmail = window.localStorage.getItem('token');
    const ID = window.localStorage.getItem('buyerID');

    var decryptToken = CryptoJS.AES.decrypt(buyerEmail,ID).toString(CryptoJS.enc.Utf8);
    const [buyer,setBuyer] = useState([]);

    function getBuyer(){
        if(buyerEmail == ""){
            
        }else{
            Axios.post('https://farmer-77de.onrender.com/getBuyer',{
                Email:decryptToken
            }).then(function(succ){
                setBuyer(succ.data);
            })
        }
    }

    function gotoMyRequests(){
        window.location.href="/Buyer/account/profile/myrequests";
    }

    useEffect(()=>{
        getBuyer();
    },[])
    return (
        <>
            <Nav />
            <div className="Buyer-profile-container">
                <div className="Buyer-profile-left">
                    
                    <div className="Buyer-profile-image">
                        <FaUser size={100} />
                    </div>
                    <div className="Buyer-profile-left-detail product-submit">
                        <p><b>Name: </b>{buyer.Name}</p>
                        <p><b>Email: </b>{buyer.Email}</p>
                        <button className="my-request-btn" onClick={()=>gotoMyRequests()}>My Requests</button>
                    </div>
                </div>
                <div className="Buyer-profile-right">
                    <div className="Buyer-profile-details">
                        <p><b>Name: </b>{buyer.Name}</p>
                        <p><b>Email: </b>{buyer.Email}</p>
                        <p><b>Contact: </b>{buyer.Contact}</p>
                        <p><b>ID: </b>{buyer._id}</p>
                        <p><b>Address: </b>{buyer.CityName +" "+buyer.StateName +" "+buyer.PinCode}</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default BuyerProfile;