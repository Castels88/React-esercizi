import React from "react";
import { Colors } from "./Colors";
import { Counter } from "./Counter";
import { CounterDisplay } from "./CounterDisplay";
import { CounterLifeCycling } from "./CounterLifecycling";
import { HelloWorld } from "./Helloworld";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { Message } from "./Message";
import { Name } from "./Name";
import { SecondCounter } from "./SecondCounter";
import { ThirdCounter } from "./ThirdCounter";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";
const items = [
    {id: 1, name: "Blu"},
    {id: 2, name: "Yellow"},
    {id: 3, name: "Green"},
    {id: 4, name: "Black"},
]
export class App extends React.Component{
render(){
    return (
    <div>
        <HelloWorld/>
        <h1>Hello <Name/></h1>
        <h2>{sum(2,3)}</h2>
        <Welcome name="John" age={17}/>
        <Counter InitialValue={0} IncrementValue={1}/>
        <SecondCounter NumeroIniziale={0}/>
        <ThirdCounter NumeroIniziale={1} IncrementValue={1} Timeout={500} />  
        <CounterDisplay NumeroIniziale={1} IncrementValue={1} Timeout={500}/>
        <CounterLifeCycling NumeroIniziale={1} IncrementValue={1} Timeout={500}/>
        <InteractiveWelcome/>
        <Login/>
        <UncontrolledLogin/>
        <Colors items={items} />
    </div>
    )
}
}

function sum(a,b){
    return a + b;
}
sum(2,3)