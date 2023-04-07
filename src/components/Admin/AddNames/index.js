import  Axios  from "axios";
import { useState } from "react";

function AddNames(){
    const [type,setType] = useState("");
    const [name,setName] = useState("");

    function addnames(e){
        e.preventDefault();
        if(type=="" || type==" "){
            alert("Type can't be empty")
        }else if(name =="" || name== " "){
            alert("Name can't be empty")
        }else{
            Axios.post('https://farmer-77de.onrender.com/checkcropname',{
                CropName:name
            }).then(function(succ){
                if(succ.data == true){
                    insertCropName();
                }else{
                    alert(name + "  already exists");
                }
            })
        }
    }

    function insertCropName(){
        Axios.post("https://farmer-77de.onrender.com/insertcropname",{
            Type:type,
            CropName:name
        }).then(function(succ){
            if(succ.data == true){
                alert(name + "  added Successfully");
            }else{
                alert("Something went wrong");
            }
        })
    }
    return (
        <>
            
            <div className="admin-addtype-container">
                
                <div className="type-field-container">
                    <h1>Add Names</h1>
                    <input type="text" placeholder="Type" onChange={(e)=>setType(e.target.value)} value={type} />
                    <input type="text" placeholder="Crop Name" onChange={(e)=>setName(e.target.value)} value={name} />
                    <button onClick={addnames}>Add</button>
                </div>
                
            </div>
        </>
    )
}

export default AddNames;