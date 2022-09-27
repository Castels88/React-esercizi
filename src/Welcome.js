import React from "react"
import {useParams, Link, useNavigate} from "react-router-dom"




export function Welcome (){
    const {name = "World!"} = useParams()
    const navigate = useNavigate()
    function handleButton(){
        navigate("/login")
    }
return(
    <div>
        <h3>Hello {name}</h3>
        <button onClick={handleButton}>enter in the app</button>
    </div>
)
}