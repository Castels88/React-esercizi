import { useState } from "react";

export function Usecounter(inizialValue=0){
const [counter, setCounter] = useState(inizialValue)

function handleCounterIncrement(){
    setCounter(c => c + 1)
}
function handleCounterDecrement(){
    setCounter(c => c - 1)
}
function resetCounter(){
    setCounter(inizialValue)
}
return{
    counter: counter,
    onIncrement : handleCounterIncrement,
    onDecrement : handleCounterDecrement,
    onReset : resetCounter,
}
}