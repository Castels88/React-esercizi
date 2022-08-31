import React from "react";
export class Age extends React.Component{
    
    render(){
        return <div>
            your age is {this.props.age} ?
        </div>
    }
}
// esercizio 5
// Extract the "Your age is " message into a new component called Age and render it within the Welcome component. 
// Pass to the Age component the age prop that Welcome is receiving from the App component.