import React, { useState } from 'react'
import "./Notes.css"
import {v4 as uuid} from 'uuid'

const InputBox = ({setData,data}) => {
    const[title ,setTitle] = useState("")
    const[description , setDescription] = useState("")
    const[date , setDate] = useState("")
    let[obj, setObj] = useState({
        title : "",
        description : "",
        date : "",
        id:""
    })

    const handleSubmit = () => {
       obj={
        title : title,
        description : description,
        date : date,
        id: uuid()
       }


      setObj(obj)
       console.log(obj)
       data.push(obj)
       setData(data)
       console.log("done",data)
       localStorage.setItem("data", JSON.stringify(data))
       window.location.href="/"
    }

    
  return (  
    <div>
        <div className ="parentContainer">
            
            <h1 style={{fontFamily:"cursive", color: "cyan"}}>NOTES APP</h1>

            <input type="text" placeholder ="Enter the title" value={title} onChange={(e)=>setTitle(e.target.value)} />
          <br />
            <textarea className="description" rows="5" cols="70" placeholder ="Enter the description" value={description} onChange={(e)=>setDescription(e.target.value)} />
          <br />
          <input type="date" onChange={(e)=>setDate(e.target.value)}/>
          <br />
            <button className="rgbtn" onClick  = {handleSubmit}>Submit</button>
        </div> 

        <h1 style={{fontFamily:"cursive", color:"crimson" , backgroundColor:"cyan"}}> Here is Your Notes 👇 </h1>

    </div>  

   
  )
}

export default InputBox