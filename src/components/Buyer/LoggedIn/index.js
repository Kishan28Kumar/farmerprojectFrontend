import Axios  from "axios";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import ProductCard from "./ProductCard";

import {FaSearch} from 'react-icons/fa'


function LoggedInBuyer(){

    const [products, setProducts] = useState([]);
    const [srchKey,setSrchKey] = useState("");

    const [currProducts,setCurrProducts] = useState(products);
    const [noofpages, setNoOfPages] = useState([]);
    const [currPage,setCurrPage] = useState(0);
    const limit = 12;

    function getProducts(){
        Axios.get('https://farmer-77de.onrender.com/getProducts').then(function(succ){
            setProducts(succ.data);
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

    
    function srchByName(){
        
        if(srchKey != "" && srchKey != " "){
            setCurrPage(1);
            setCurrProducts(products.filter((product)=>product.CropName === srchKey.charAt(0).toUpperCase() + srchKey.slice(1)));
        }else if(srchKey == '' || srchKey == " "){
            setCurrProducts(products);
        }
    }


    function handlePage(page,e){
        setCurrPage(page);   
    }
    
    useEffect(()=>{
        getProducts();
    },[])

    useEffect(()=>{
        noofPages();
    },[currProducts])

    return (
        <>
            <Nav />
            <div className="myproducts-heading-container">
                <h1>Products</h1>
            </div>
            <div className="srch-component-container">
                <input type="text" placeholder="Search By Name" className="srch-field" value={srchKey} onChange={(e)=>{setSrchKey(e.target.value)}} onKeyUp={srchByName} />
            </div>
            <div className="myproducts-container">
                {
                    currProducts.map((product,idx)=>{
                        if(idx>=currPage && idx<limit+currPage){

                            return <ProductCard props={product} key={product._id} />
                        }
                    })
                }
                
            </div>
            <div className="pageNoStrip" id="pageStrip">
                {
                    noofpages.map((page,idx)=>{
                            return <button value={page} onClick={(e)=>handlePage(page,e)} id={"currPage"+idx} >{idx+1}</button>
                        
                    })
                }
            </div>
        </>
    )
}

export default LoggedInBuyer;