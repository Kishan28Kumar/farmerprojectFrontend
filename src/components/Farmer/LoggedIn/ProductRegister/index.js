import  Axios  from 'axios';
import { useEffect, useState } from 'react';
import Nav from '../Nav';
import './index.css';
import {FaCamera} from 'react-icons/fa';

var CryptoJS = require('crypto-js');

function ProductRegister(){
    const [types, setTypes] = useState([]);
    const [currType, setCurrType] = useState(""); 

    const [cropnames, setCropNames] = useState([]);
    const [currCropName, setCurrCropName] = useState("");

    const [variety,setVariety] = useState("");
    const [qty,setQty] = useState();
    const [price, setPrice] = useState();
    const [farmer,setFarmer] = useState([]);

    const [file,setFile] = useState();

    const farmerEmail = window.localStorage.getItem('farmerToken');
    const farmerID = window.localStorage.getItem('farmerID');
    var decryptfarmerToken = CryptoJS.AES.decrypt(farmerEmail,farmerID).toString(CryptoJS.enc.Utf8);

    function getFarmer(){
        Axios.post('https://farmer-77de.onrender.com/getFarmer',{
            Email:decryptfarmerToken
        }).then(function(succ){
            setFarmer(succ.data);
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

    useEffect(()=>{
        getTypes();
        getFarmer();
    },[])

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


    function addProduct(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file);
        formData.append('Type',currType);
        formData.append('CropName',currCropName);
        formData.append("Variety",variety);
        formData.append("Quantity",qty);
        formData.append("Price",price);
        formData.append('FarmerName',farmer.Name);
        formData.append('Contact',farmer.Contact);
        formData.append('FarmerID',farmer._id);
        formData.append('Location',farmer.CityName + " "+ farmer.StateName+" "+farmer.PinCode)
        if(currCropName == '' || currType == ''  || variety == ''  || qty == undefined || file == null || price==undefined){
            alert('all fields are required');
            console.log(currCropName+" "+currType+" "+variety +" " +qty+" "+price);
        }else{
            Axios.post('https://farmer-77de.onrender.com/addProduct',formData,{
                headers:{
                    'Content-Type':'multi-part/form-data'
                }
            }).then(function(succ){
                if(succ.data == true){
                    alert("Product added Successfully");
                    window.location.reload();
                }else{
                    alert("Product already exists");
                    window.location.reload();
                }
            })
        }
        
    }


    function showImg(e){
        var currFile = e.target.files[0];
        var reader = new FileReader();
        document.getElementById('curr-img-name').innerText = e.target.files[0].name;
        reader.addEventListener('load',function(){
            setBgImg(reader.result);
        })

        if(currFile){
            reader.readAsDataURL(currFile);
        }

    }

    function setBgImg(imgUrl){
        var currImg = document.getElementById('img-file-input');
        currImg.style.backgroundImage = "url("+imgUrl+")";
        // currImg.style.backgroundSize = "cover";
        currImg.style.backgroundPosition="center";
        currImg.style.backgroundRepeat = 'no-repeat';

        // currImg.style.backgroundSize = "auto";
        // currImg.style.backgroundPosition="center top"
        
    }
    

    return (
        <>
            <Nav />
            <div className="product-form-container">
                <div className="form-container">
                    <h2>Add Product</h2>
                    <div className="selectContainer">
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
                        <input type="text" placeholder='Variety' onChange={(e)=>setVariety(e.target.value)} />
                    </div>

                    <div className="product-image" id="img-file-input">
                        <label className="imageLabel">Select Product Image
                            <br />
                            <FaCamera size={30} />
                            <input type="file" accept="image/png, image/jpg, image/gif, image/jpeg"  onChange={(e)=>{setFile(e.target.files[0]); showImg(e)}} />
                            <p id="curr-img-name"></p>
                        </label>
                        
                    </div>

                    <div className="product-quantity">
                        <input type="number" placeholder='Quantity' onChange={(e)=>setQty(e.target.value)}/>
                    </div>

                    <div className="product-price">
                        <input type="number" placeholder="Price" onChange={(e)=>setPrice(e.target.value)} />
                    </div>

                    <div className="product-submit">
                        <button onClick={(e)=>addProduct(e)}>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductRegister;