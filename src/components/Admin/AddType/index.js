import Axios  from "axios";
import { useState } from "react";
import './index.css';


function Addtype(){
    const [type,setType] = useState("");

    function addtype(e){
        e.preventDefault();
        if(type=="" || type==" "){
            alert("type field can't be empty")
        }else{
            Axios.post("https://farmer-77de.onrender.com/checktype",{
                Type:type
            }).then(function(succ){
                if(succ.data == true){
                    insertType();
                }else{
                    alert(type + "  already exists");
                }
            })
        }
    }

    function insertType(){
        Axios.post("https://farmer-77de.onrender.com/inserttype",{
            Type:type
        }).then(function(succ){
            if(succ.data == true){
                alert(type +'   added successfully');
            }else{
                alert('something went wrong');
            }
        })
    }
    return (
        <>
            <div className="admin-addtype-container">
               
                <div className="type-field-container">
                    <h1>Add Type</h1>
                    <input type="text" placeholder="Type" onChange={(e)=>setType(e.target.value)} value={type}/>
                    <button onClick={addtype}>Add</button>
                </div>
                

            </div>
            
        </>
    )
}

export default Addtype;