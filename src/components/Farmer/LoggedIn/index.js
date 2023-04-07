import Nav from "./Nav";
import RequestCard from "./RequestCard";
import './index.css';
import  Axios  from "axios";
import { useEffect, useState } from "react";

function LoggedInFarmer(){
    const [requests,setRequests] = useState([]);
    const [srchKey,setSrchKey] = useState("");

    const [currProducts,setCurrProducts] = useState(requests);
    const [noofpages, setNoOfPages] = useState([]);
    const [currPage,setCurrPage] = useState(0);
    const limit = 12;

    function getrequests(){
        Axios.get('https://farmer-77de.onrender.com/getRequests').then(function(succ){
            setRequests(succ.data);
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
            setCurrProducts(requests.filter((product)=>product.CropName === srchKey.charAt(0).toUpperCase() + srchKey.slice(1)));
        }else if(srchKey == '' || srchKey == " "){
            setCurrProducts(requests);
        }
    }

    function handlePage(page){
        setCurrPage(page); 
        console.log(currProducts);
    }

    useEffect(()=>{
        getrequests();
    },[])

    useEffect(()=>{
        noofPages();
    },[currProducts])

    return (
        <>
            <Nav />
            <div className="myproducts-heading-container">
                <h1>Requests</h1>
            </div>
            <div className="srch-component-container">
                <input type="text" placeholder="Search By Name" className="srch-field" value={srchKey} onChange={(e)=>{setSrchKey(e.target.value)}} onKeyUp={srchByName} />
            </div>
            <div className="myproducts-container">
                {
                    currProducts.map((request,idx)=>{
                        if(idx>=currPage && idx<limit+currPage){
                            return <RequestCard props={request} key={request._id} />
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

export default LoggedInFarmer;