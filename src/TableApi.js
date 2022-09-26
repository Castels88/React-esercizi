import React, { useEffect, useState } from "react";
import Axios from "axios"
export function TableApi (){
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")

    useEffect(()=>{
        Axios.get(`https://jsonplaceholder.typicode.com/users`).then((response)=>{
            (response.data.map((value)=> {
                setName(value.name)
                return value.name
            }))
        })
    },[])
    function handleInput(event){
        setName(event.target.value)
    }
    function handleEmail(){
        Axios.get(`https://jsonplaceholder.typicode.com/users`).then((response)=>{
            (response.data.map((value)=> {
                setEmail(value.email)
                return value.email
            }))
        })
    }
    return (
        
    <div>
        <div>
            <input type="text" onChange={handleInput}/>
            <button onClick={handleEmail}>click me !</button>
            <p>{email}</p>
        </div>
    </div>
    )
}