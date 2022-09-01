import React from "react";
export class ThirdCounter extends React.Component{
    state = {
        count : this.props.count
    }
    
    constructor(props){
    super(props)
    setInterval(()=>{
        this.setState((state)=>{
            return{
                count: state.count + 1
            }
        })
    },1000)
    }
    render(){
        return <h1>{this.state.count} esercizio State 01 </h1>
    }
}






// State 01
// Create a Counter class component with an internal state containing a count property, 
// initialized to 0. The Counter component should render the count property within an h1 tag, 
// and the count property should be incremented by 1 every second;

