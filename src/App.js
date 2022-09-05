import React, { Fragment } from "react";
import { Button } from "./Button";
import { Counter } from "./Counter";
import { CounterButton } from "./CounterButton";
import { CounterDisplay } from "./CounterDisplay";
import { CounterLifeCycling } from "./CounterLifecycling";
import { HelloWorld } from "./Helloworld";
import { Message } from "./Message";
import { Name } from "./Name";
import { SecondCounter } from "./SecondCounter";
import { ThirdCounter } from "./ThirdCounter";
import { Welcome } from "./Welcome";
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
        <CounterLifeCycling NumeroIniziale={1} IncrementValue={1} Timeout={250}/>
        <Button InizialNUmber={1} />
        <CounterButton/>
    </div>
    )
}
}

function sum(a,b){
    return a + b;
}
sum(2,3)