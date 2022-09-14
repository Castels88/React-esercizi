import React, { Fragment } from "react";
import { ClickCounter } from "./ClickCounter";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { CounterDisplay } from "./CounterDisplay";
import { CounterLifeCycling } from "./CounterLifecycling";
import { DisplayLanguage } from "./DisplayLanguage";
import { HelloWorld } from "./Helloworld";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { LanguageContext } from "./LanguageContext ";
import { Login } from "./Login";
import { Message } from "./Message";
import { Name } from "./Name";
import { SecondCounter } from "./SecondCounter";
import { Sum } from "./Sum";
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
    <Container title={"La mia App"}>
        <LanguageContext.Provider>
            <DisplayLanguage/>
        </LanguageContext.Provider>
        <Sum/>
        <Welcome/>
        <Counter InitialValue={0} IncrementValue={1}/>
        <CounterDisplay NumeroIniziale={1} IncrementValue={1} Timeout={500}/>
        <ClickCounter InitialValue={0}/>
        <InteractiveWelcome/>
        <Login/>
        <Colors todo={todo} />
        <TodoList items={items} render={(item)=>{
            return(
                <div>{item}</div>
            )}}>
        </TodoList>
    </Container>
    )
}
}

