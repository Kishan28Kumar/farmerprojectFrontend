import Axios  from 'axios';
import './index.css';

function RequestCard({props}) {
    function handleRemove(){
        Axios.post('https://farmer-77de.onrender.com/removeRequest',{
            ID:props._id
        }).then(function(succ){
            if(succ.data == true){
                alert('Request Removed Successfully');
                window.location.reload();
            }else{
                alert("Request Couldn't be Reomved");
            }
        })
    }
  return (
    <>


        <div className = "myproduct-container " style={{textAlign:"center"}}>
                <div className = "myproduct-detail-up">
                    <div className="product-details-container">
                        <p className="myproduct-type"><b>Type:</b> {props.Type} </p>
                        <p className="myproduct-name"><b>Name:</b>{props.CropName}  </p>
                        <p className="myproduct-variety"><b>Variety:</b> {props.Variety}</p>
                        <p className="myproduct-farmer"><b>Buyer: </b>{props.BuyerName}</p>
                        <p className="myproduct-contact"><b>Contact:</b>{props.Contact}</p>
                        <p className="myproduct-contact"><b>Location: </b>{props.Location}</p>
                    </div>
                </div>
                <div className = "myproduct-detail-down">
                    <div className="myproduct-price-container">
                        <p className="myproduct-price">{props.Price} Rs/kg | {props.Quantity} Kg</p>
                        
                        <p className="myproduct-date">Date: {props.Date}</p>     
                         <button className="myproduct-remove-btn" onClick={()=>handleRemove()}>Remove</button> 
                    </div>
                </div>
            </div>
    </>
  )
}

export default RequestCard;