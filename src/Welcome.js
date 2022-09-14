import React from "react"
import { Age } from "./Age"


export function Welcome ({name= "John", age= 33}){
return(
    <h2>Hello i'm {name}, i have {age} years old</h2>
)
}