// creare dalla API 3 tasti che generino 3 tipi di scusa
// la cosa molto importante che ci ha permesso di svolgere questo esercizio è...
// l API ci ritonava un array con poi dentro un oggetto con delle proprietà
// nel setExcuse noi siamo andati a prendere il primo elemento[0]con la proprietà excuse
//e molto importante vedendo che la API era struttura gia in tipologie ci è bastato inserire
//il parametro excuse nel fetch per poi richiamare le categorie che volevamo nei bottoni
import React, { useState } from "react";
import Axios from "axios"
export function Excuse(){
    const [excuse, setExcuse] = useState("")
    const fetchExcuse = (excuse)=>{
        Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((response)=>{
            setExcuse(response.data[0].excuse)
        })
    }
    
    return (
        <div>
            <div>
                <button onClick={()=>fetchExcuse("party")}>Party</button>
            </div>
            <div>
                <button onClick={()=>fetchExcuse("family")}>Family</button>
            </div>
            <div>
                <button onClick={()=>fetchExcuse("office")}>Office</button>
            </div>
            <h1>{excuse}</h1>
        </div>
    )
}