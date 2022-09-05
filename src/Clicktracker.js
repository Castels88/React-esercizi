import React from "react";
import arrow_up from "./img/arrow_up.png"
import arrow_right from "./img/arrow_r.png"
import arrow_left from "./img/arrow_l.png"
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
                <button name="PrimoBTN" onClick={this.handleButton}>
                <img src={arrow_up} alt="freccia su" />
                </button>
                <button name="SecondoBTN" onClick={this.handleButton}>
                <img src={arrow_right} alt="" />
                </button>
                <button name="TerzoBTN" onClick={this.handleButton}>
                <img src={arrow_left} alt="" />
                </button>
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

// Events - 04
// Modifiy the ClickTracker so that each button contains an image instead of a text.
//  How does this affect the event handler?