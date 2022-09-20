import React from "react";
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"

export function Counter(){
    const [count, setCount] = useState(0)
    useEffect(()=>{
        const interVal = setInterval(()=>{
            setCount(c => c + 1)
        },1000);
        return () => {
            clearInterval(interVal)
        }
    },[])
    
    
    return(
        <div>{`il numero del count is ${count}`}
        <Link to="/"> <div>back</div> </Link>
        </div>
    )
}