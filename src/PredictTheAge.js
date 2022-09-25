import React, { useEffect, useState } from "react";
import Axios from "axios"
// in questo altro esempio la API mi ritorna in base al nome un ipotetica eta 
//andiamo a richiamre la API ma stavolt ainvece di settare un nome voglio che qualsiasi nome
// io cerco nell'input mi ritoni una ipotetica API quindi 
// creiamo un set state anche il nome 
// poi colleghiamo l'input con onchange quindi creiamo la funzione dell evento
// adesso come facciamo a collegare il name del setstate alla API perche la API 
// deve prendere il nome che noi digitiamo .
// andiamo semplicemente a mettere dopo il name con ${name} il nostro parametro del setState
// adesso noi vogliamo che venga mostrata l'età quindi creiamo un setstate per l eta che deve 
// essere visualizzata. 
// quindi del fect mettiamo il setage e nell h1 mettimao la age 
export function PredictTheAge(){
    const [age, setAge] = useState(0)
    const [name, setName] = useState("")
    useEffect(()=>{
        Axios.get(`https://api.agify.io/?name=${name}`).then((response)=>{
            setAge(response.data.age)
        })
    },[])
    function handleInput (event){
        setName(event.target.value)
    }
    function handleButton(){
        Axios.get(`https://api.agify.io/?name=${name}`).then((response)=>{
            setAge(response.data.age)
        })
    }
    return (
        <div>
            <input type="text" placeholder="Put an user" onChange={handleInput}  />
            <button onClick={handleButton}>Predict the Age</button>
            <h3>Predicted age is : {age} </h3>
        </div>
    )
}