import Nav from '../Nav';
import  Axios  from 'axios';
import { useEffect, useState } from 'react';




var CryptoJS = require('crypto-js');
function ProductRequest(){
    const [types, setTypes] = useState([]);
    const [currType, setCurrType] = useState(""); 
    const [cropnames, setCropNames] = useState([]);
    const [currCropName, setCurrCropName] = useState("");

    const [variety,setVariety] = useState("");
    const [qty,setQty] = useState();
    const [price, setPrice] = useState();
    const [buyer,setBuyer] = useState([]);

    const buyerEmail = window.localStorage.getItem('token');
    const ID = window.localStorage.getItem('buyerID');

    var decryptToken = CryptoJS.AES.decrypt(buyerEmail,ID).toString(CryptoJS.enc.Utf8);


    function getBuyer(){
        Axios.post('https://farmer-77de.onrender.com/getBuyer',{
            Email:decryptToken
        }).then(function(succ){
            setBuyer(succ.data);
        })
    }

    function getTypes(){
        Axios.get('https://farmer-77de.onrender.com/getTypes').then(function(succ){
            setTypes(succ.data);
        })
    }

    function getCropName(){
        Axios.post('https://farmer-77de.onrender.com/getcropname',{
            Type:currType
        }).then(function(succ){
            setCropNames(succ.data);
        })
    }


    function handleChange(e){
        setCurrType(e.target.value);
    }

    function handleSetCropName(e){
        setCurrCropName(e.target.value);
    }

    useEffect(()=>{
        getCropName();
        setTimeout(()=>{
            var selectCrop = document.querySelector('#selectCropName');
        setCurrCropName(selectCrop.value);
        },2000);
        
    },[currType])


    function addRequest(e){
        e.preventDefault();
        if(currType==""){
            alert("Type can't be empty");
        }else if(currCropName == ""){
            alert("Name can't be empty");
        }else if(variety=="" || variety==" "){
            alert("Variety field can't be empty");
        }else if(price == undefined || qty == undefined){
            alert("Price and Quantity can't be empty");
        }else{
            Axios.post('https://farmer-77de.onrender.com/addRequest',{
                Type:currType,
                CropName:currCropName,
                Variety:variety,
                Price:price,
                Quantity:qty,
                BuyerName:buyer.Name,
                Contact:buyer.Contact,
                Location:buyer.CityName +" "+ buyer.StateName + " "+buyer.PinCode,
                ID:buyer._id,
                Email:buyer.Email
            }).then(function(succ){
                if(succ.data == true){
                    alert("Request Successfully Added");
                    window.location.reload();
                }else{
                    alert("Something went wrong");
                }
            })
        }
    }


    useEffect(()=>{
        getTypes();
        getBuyer();
    },[])
    return (
        <>
            <Nav />
            <div className="product-form-container">
                <div className="form-container">
                    <h2>Add Request</h2>
                    <div className='selectContainer'>
                        <div className="product-type">
                        <label>Product Type: </label>
                        <select id="selectTypeName" value={currType} onChange={handleChange}>
                            <option value=""></option>
                            {
                                types.map((type,idx)=>{
                                    return <option key={type._id} value={type.Type}>{type.Type}</option>
                                })
                            }
                            
                        </select>
                    </div>

                    <div className="product-name">
                        <label>Product Name:</label>
                        <select id="selectCropName" onChange={handleSetCropName} value={currCropName}>
                            {
                                cropnames.map((cropname,idx)=>{
                                    return <option key={cropname._id} value={cropname.CropName}>{cropname.CropName}</option>
                                })
                            }
                        </select>
                    </div>
                    </div>

                    <div className="product-variety">
                        <label>Product Variety:</label>
                        <input type="text" placeholder='Variety' onChange={(e)=>setVariety(e.target.value)} value={variety} />
                    </div>

                    <div className="product-quantity">
                        <input type="number" placeholder='Quantity' onChange={(e)=>setQty(e.target.value)} value={qty} />
                    </div>

                    <div className="product-price">
                        <input type="number" placeholder="Price" onChange={(e)=>setPrice(e.target.value)} value={price} />
                    </div>

                    <div className="product-submit">
                        <button onClick={(e)=>addRequest(e)}>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductRequest;