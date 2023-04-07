

function ProductCard({props}){
    return (
        <>
            <div className = "myproduct-container ">
                <div className = "myproduct-image">
                    <img src={props.imgURL} alt={props.imgURL} />
                </div>
                <div className = "myproduct-detail-up">
                    <div style={{paddingLeft:"20px"}}>
                        <p className="myproduct-type"><b>Type:</b> {props.Type} </p>
                        <p className="myproduct-name"><b>Name:</b> {props.CropName}  </p>
                        <p className="myproduct-variety"><b>Variety:</b> {props.Variety}</p>
                        <p className="myproduct-farmer"><b>Farmer: </b>{props.FarmerName}</p>
                        <p className="myproduct-contact"><b>Contact:</b> {props.Contact}</p>
                        <p className="myproduct-contact"><b>Location: </b>{props.Location}</p>
                    </div>
                </div>
                <div className = "myproduct-detail-down">
                    <div className="myproduct-price-container">
                        <p className="myproduct-price">{props.Price} Rs/kg | {props.Quantity} Kg</p>
                        
                        <p className="myproduct-date">Date: {props.Date}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard;