import React from "react";
export class ThirdCounter extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        count : this.props.NumeroIniziale
    }
    setInterval(()=>{
        this.setState((state)=>{
            return{
                count: state.count + this.props.IncrementValue
            }
        })
    },this.props.Timeout)
    }
    render(){
        return <h1>{this.state.count} esercizio State</h1>
    }
}






// State 01
// Create a Counter class component with an internal state containing a count property, 
// initialized to 0. The Counter component should render the count property within an h1 tag, 
// and the count property should be incremented by 1 every second;

// State 03
// Modify the Counter component so that the initial value of the counter, 
// the increment interval and the increment amount are passed as props to the component.