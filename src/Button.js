import React from "react";
export class Button extends React.Component{
    state ={
        count : this.props.InizialNUmber
    }

    IncrementFunction = () => {
        this.setState((state)=>{
            return{
                count: state.count +1
            }
        })
    }
    render(){
        return(
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={this.IncrementFunction} >Incrementa</button>
            </div>
        )
    }
}



// Events - 01
// Create a ClickCounter class component that increments a counter every time a user clicks on a button. 
// Render both the current value of the counter and the button within the ClickCounter component.

// Events - 03
// Create a ClickTracker component that renders three buttons. 
// Implement a single event handler for all three buttons, and track of which button was pressed last. 
// Show the last button that was pressed in an h1 tag within the ClickTracker component. 
// Tip: you can use the event object to access the target property of the event.