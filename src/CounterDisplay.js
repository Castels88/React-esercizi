import React from "react";
import { ThirdCounter } from "./ThirdCounter";
export class CounterDisplay extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : <ThirdCounter NumeroIniziale={1} IncrementValue={1} Timeout={500}/>
        }
    }
    
    
    
    render(){
        return <h1>{this.state.count}</h1>
    }
}



// State 04
// Extract the h1 tag showing the count state variable into a new component called CounterDisplay and 
// render it within the Counter component, passing it the count state variable as a prop.