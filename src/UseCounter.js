import { useCallback, useState } from "react";

export function Usecounter(inizialValue=0){
const [counter, setCounter] = useState(inizialValue)

const handleIncrement = useCallback(function handleIncrement(){
    setCounter(c => c + 1)
} ,[])

const handleDecrement = useCallback(function handleDecrement(){
    setCounter(c => c - 1)
} ,[])

const handleReset = useCallback(function handleReset(){
    setCounter(inizialValue)
} ,[inizialValue])
return{
    counter: counter,
    onIncrement : handleIncrement,
    onDecrement : handleDecrement,
    onReset : handleReset,
}
}