import React, { useEffect, useState } from "react";
import Axios from "axios"
import { PredictTheAge } from "./PredictTheAge";
import { Excuse } from "./Excuse";
import { MapList } from "./MapList";
import { EserciziArrayMethod } from "./EserciziArrayMethod"
// vediamo come si usa axios per fetchare dati da API
// noteremo che la API viene renderizzata all'infinito per evitare cio bisogna mettere 
// il fetch dentro uno use effect in modo che venga mostrato solo quando viene montato
// e adesso spuntera uno e basta 
// per farsi che la frase spunti al click ci basta muovere il fecth dentro una funzione
// handleButton e in questo modo al click spuntera sempre una nuovo frase
export function App (){
    const [frase, setFrase] = useState("")
    useEffect(()=>{
        Axios.get(`https://catfact.ninja/fact`).then((response)=> {
        setFrase(response.data.fact)
    })
    },[])
    function handleButton(){
        Axios.get(`https://catfact.ninja/fact`).then((response)=> {
        setFrase(response.data.fact)
    })
    }
    return (
        <div>
            <button onClick={handleButton}>Generate Cat Fact </button>
            <p>{frase}</p>
            <PredictTheAge/>
            <Excuse/>
            <MapList/>
            <EserciziArrayMethod/>
        </div>
        )
}


