import React from "react"
import {useParams, Link} from "react-router-dom"




export function Welcome (){
    const {name = "World!"} = useParams()
return(
    <div>
        <h3>Hello {name}</h3>
        <Link to="/">Login to the App</Link>
    </div>
)
}