import React from "react";
export class ClickTracker extends React.Component{
    state = {
        TrackEvent: ""
    }
    
    handleButton = (event) => {
        console.log(event.target.innerText)
        this.setState(()=>{
            return{
                TrackEvent: event.target.innerText
            }
        })
    }
    
    
    
    render(){
        return(
            <div>
                <button name="PrimoBTN" onClick={this.handleButton}>Primo</button>
                <button name="SecondoBTN" onClick={this.handleButton}>Secondo</button>
                <button name="TerzoBTN" onClick={this.handleButton}>Terzo</button>
                <h1>{this.state.TrackEvent}</h1>
            </div>
        )
    }
}

// Events - 03
// Create a ClickTracker component that renders three buttons. 
// Implement a single event handler for all three buttons, and track of which button was pressed last. 
// Show the last button that was pressed in an h1 tag within the ClickTracker component. 
// Tip: you can use the event object to access the target property of the event.