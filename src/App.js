import React from "react";
import { HelloWorld } from "./Helloworld";
import { Message } from "./Message";
import { Name } from "./Name";
import { Welcome } from "./Welcome";
export class App extends React.Component{
render(){
    return (
    <div>
        <HelloWorld/>
        <h1>Hello <Name/></h1>
        <h2>{sum(2,3)}</h2>
        <Welcome name="Elio"/>  
    </div>
    )
}
}

function sum(a,b){
    return a + b;
}
sum(2,3)