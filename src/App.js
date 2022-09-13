import React, { Fragment } from "react";
import { ClickCounter } from "./ClickCounter";
import { Colors } from "./Colors";
import { Container } from "./Container";
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
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";
const todo = [
    {id: 1, name: "Blu"},
    {id: 2, name: "Yellow"},
    {id: 3, name: "Green"},
    {id: 4, name: "Black"},
]
const items = [
    {id:1 , name: "fare la spesa"},
    {id:2 , name: "pulire casa"},
    {id:3 , name: "buttare la spazzatura"},
    {id:4 , name: "studiare e fare esercizi"},
]
export class App extends React.Component{
render(){
    return (
    <Container>
        <HelloWorld/>
        <h1>Hello <Name/></h1>
        <h2>{sum(2,3)}</h2>
        <Welcome name="John" age={17}/>
        <Counter InitialValue={0} IncrementValue={1}/>
        {/* <SecondCounter NumeroIniziale={0}/> */}
        {/* <ThirdCounter NumeroIniziale={1} IncrementValue={1} Timeout={500} />   */}
        <CounterDisplay NumeroIniziale={1} IncrementValue={1} Timeout={500}/>
        <CounterLifeCycling NumeroIniziale={1} IncrementValue={1} Timeout={500}/>
        <ClickCounter InitialValue={0}/>
        <InteractiveWelcome/>
        <Login/>
        <UncontrolledLogin/>
        <Colors todo={todo} />
        <TodoList items={items}/>
    </Container>
    )
}
}

function sum(a,b){
    return a + b;
}
sum(2,3)