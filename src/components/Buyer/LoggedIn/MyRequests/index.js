import Nav from "../Nav";
import  Axios  from 'axios';
import { useEffect, useState } from 'react';
import RequestCard from "../RequestCard";





function MyRequestsDetails(){
    const [myRequests,setMyRequests] = useState([]);
    const [currProducts,setCurrProducts] = useState(myRequests);
    const [noofpages, setNoOfPages] = useState([]);
    const [currPage,setCurrPage] = useState(0);
    const limit = 12;

    const buyerEmail = window.localStorage.getItem('buyerID');
    function getProducts(){
        Axios.post('https://farmer-77de.onrender.com/getMyRequests',{
            BuyerID:buyerEmail
        }).then(function(succ){
            setMyRequests(succ.data);
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
                <h1>My Requests</h1>
            </div>
            <div className="myproducts-container">
                {
                    myRequests.map((myRequest,idx)=>{
                        if(idx>=currPage && idx<limit+currPage){
                            return <RequestCard props={myRequest} key={myRequest._id} />
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

export default MyRequestsDetails;