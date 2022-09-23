import React from "react"
import {useParams, Link, useNavigate} from "react-router-dom"
import { Counter } from "./Counter"




export function Welcome (){
    const navigate = useNavigate()
    const {name = "elio"} = useParams()

    function handleButton(){
        navigate("/counter")
    }
    function handleButtonLogin(){
        navigate("/login")
    }
return(
    <div>
        <h3>Hello {name}</h3>
        <button onClick={handleButton}>vai al counter</button>
        <button onClick={handleButtonLogin}>vai al login</button>

    </div>
)
}