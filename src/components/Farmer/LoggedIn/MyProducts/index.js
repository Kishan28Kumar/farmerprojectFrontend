import  Axios  from 'axios';
import { useState, useEffect } from 'react';
import Nav from '../Nav';
import MyProducts from '../Products';
import './index.css';

function FarmerMyProducts(){
    const [myProducts,setMyProducts] = useState([]);

    const farmerEmail = window.localStorage.getItem('farmerID');

    const [currProducts,setCurrProducts] = useState(myProducts);
    const [noofpages, setNoOfPages] = useState([]);
    const [currPage,setCurrPage] = useState(0);
    const limit = 12;


    function getProducts(){
        Axios.post('https://farmer-77de.onrender.com/getMyProducts',{
            FarmerID:farmerEmail
        }).then(function(succ){
            setMyProducts(succ.data);
            setCurrProducts(succ.data);
        })
    }


    function noofPages(){
        var arr = [];
        for(let i=0,j=0; i<Math.ceil(currProducts.length/12); ++i, j+=12){
            arr.push(j);
        }
        setNoOfPages(arr);
    }


    function handlePage(page){
        setCurrPage(page); 
        // console.log(currProducts);
    }


    useState(()=>{
        getProducts();
    },[])

    useEffect(()=>{
        noofPages();
    },[currProducts])
    return (
        <>
            <Nav />
            <div className="myproducts-heading-container">
                <h1>My Products</h1>
            </div>
            <div className="myproducts-container">
                
                {
                    currProducts.map((myProduct,idx)=>{
                        if(idx>=currPage && idx<limit+currPage){
                            return <MyProducts props={myProduct} key={myProduct._id} />
                        }
                        
                    })
                }
            </div>
            <div className="pageNoStrip">
                {
                    noofpages.map((page,idx)=>{
                        return <button value={page} onClick={()=>handlePage(page)}>{idx+1}</button>
                    })
                }
            </div>
        </>
    )
}

export default FarmerMyProducts;