import React from 'react'
import "./Notes.css"
import { AiFillDelete } from "react-icons/ai"


const AppendItem = ({data}) => {
    const handleDelete = (elem) => {
       data=data.filter((item) =>{
        return (
            elem.id!== item.id
        )
       })
       localStorage.setItem("data", JSON.stringify(data))
       window.location.href="/"
    }
  return (
    <div className="appendingCont">
        {data.map((elem) =>{
            return (
                <div key={elem.id}>
                    <h1>{elem.title}</h1>
                    <p>{elem.description}</p>
                    <h6>Date : {elem.date}</h6>
                    <button className="btn" onClick = {()=>handleDelete(elem)}
                    ><span style={{fontSize:"30px"}}><AiFillDelete /></span></button>
               </div>
            )
        })}
       
    </div>
  )
}

export default AppendItem