import { useEffect, useState } from "react"

export function Home (){
    const [data, setData] = useState(null)
    useEffect(()=>{
        fetch(` http://numbersapi.com/random/math`)
        .then(response => {
            return response.text()
        })
        .then(text =>{
            console.log(text)
            setData(text)
        })
    },[])
    function handleText(){

    }
    return(
        <div>
            <button onClick={handleText}>Home</button>
            <button >Odd</button>
            <button >Even</button>
        </div>
    )
}