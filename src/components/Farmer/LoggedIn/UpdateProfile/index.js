import Axios  from 'axios';
import { useEffect, useState } from 'react';
import Nav from '../Nav';
import './index.css';

function UpdateProfile(){
    const farmerID = window.localStorage.getItem('farmerID');

    const [farmer,setFarmer] = useState([]);
    const [Name,setName] = useState(farmer.Name);
    const [Contact, setContact] = useState("");
    const [CityName,setCityName] = useState("");
    const [StateName,setStateName] = useState("");
    const [PinCode,setPinCode] = useState("")

    function getFarmerByID(){
        Axios.post('https://farmer-77de.onrender.com/getFarmerByID',{
            ID:farmerID
        }).then(function(succ){
            
            setName(succ.data.Name);
            setContact(succ.data.Contact);
            setCityName(succ.data.CityName);
            setStateName(succ.data.StateName);
            setPinCode(succ.data.PinCode);
        })
    }

    function handleUpdate(e){
        e.preventDefault();
        Axios.post('https://farmer-77de.onrender.com/updateFarmer',{
            ID:farmerID,
            Name:Name,
            Contact:Contact,
            CityName:CityName,
            StateName:StateName,
            PinCode:PinCode
        }).then(function(succ){
            if(succ.data == true){
                console.log("Profile Update Successfully");
                window.location.href="/Farmer/account/profile";
            }
        })
    }

    useEffect(()=>{
        getFarmerByID();
        
    },[])

    return (
        <>
            <Nav />
            <div className="product-form-container">
                <div className="form-container">
                    <h2>Update Profile</h2>
                    <div className="product-variety">
                        <label>Name:</label>
                        <input type="text" placeholder='Name' value={Name} onChange={(e)=>setName(e.target.value)} />
                    </div>

                    <div className="product-variety">
                        <label>Contact:</label>
                        <input type="text" placeholder='Contact' value={Contact} onChange={(e)=>setContact(e.target.value)}/>
                    </div>

                    <div className="product-variety">
                        <label>City:</label>
                        <input type="text" placeholder='City' value={CityName} onChange={(e)=>setCityName(e.target.value)}  />
                    </div>
                    <div className="product-variety">
                        <label>State:</label>
                        <input type="text" placeholder='State' value={StateName} onChange={(e)=>setStateName(e.target.value)}   />
                    </div>

                    <div className="product-variety">
                        <label>PIN Code:</label>
                        <input type="text" placeholder='PIN Code' value={PinCode} onChange={(e)=>setPinCode(e.target.value)}  />
                    </div>

                    <div className="product-submit">
                        <button onClick={(e)=>{handleUpdate(e)}}>Update Profile</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UpdateProfile