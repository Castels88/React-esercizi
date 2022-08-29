import React from "react";
import { HelloWorld } from "./Helloworld";
import { Name } from "./Name";
export class App extends React.Component{
render(){
    return (
    <div>
        <HelloWorld/>
        <h1>Hello <Name/></h1>
    </div>
    )
}
}