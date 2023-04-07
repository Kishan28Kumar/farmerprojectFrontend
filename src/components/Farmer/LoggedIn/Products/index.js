import  Axios  from "axios";
import "./index.css"

function MyProducts({props}){
    function removeCard(ID){
        Axios.post('https://farmer-77de.onrender.com/removeMyProduct',{
            ID:ID,
            imgURL:props.imgURL
        }).then(function(succ){
            if(succ.data == true){
                alert("Item Deleted");
                window.location.reload();
            }
        })
    }
    return (
        <>
            <div className = "myproduct-container ">
                <div className = "myproduct-image">
                    <img src={props.imgURL} alt={props.imgURL} />
                </div>
                <div className = "myproduct-detail-up">
                    <div >
                        <p className="myproduct-type"><b>Type:</b> {props.Type} </p>
                        <p className="myproduct-name"><b>Name:</b>{props.CropName}  </p>
                        <p className="myproduct-variety"><b>Variety:</b> {props.Variety}</p>
                        {/* <p className="myproduct-farmer"><b>Farmer: </b>Adesh</p> */}
                        {/* <p className="myproduct-contact"><b>Contact:</b> 8675687923</p> */}
                    </div>
                </div>
                <div className = "myproduct-detail-down">
                    <div className="myproduct-price-container">
                        <p className="myproduct-price">{props.Price} Rs/kg | {props.Quantity} Kg</p>
                        
                        <p className="myproduct-date">Date: {props.Date}</p>
                        <button className="myproduct-remove-btn" onClick={()=>{removeCard(props._id)}}>Remove</button>
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProducts;