import React from "react";
import { Button } from "./Button";
export class CounterButton extends React.Component{
    render(){
        return(
            <div>
                <h3>Events - 02</h3>
                <Button InizialNUmber={1}/>
            </div>
        )

    }
}
// Events - 02
// Extract the button within a new component called CounterButton 
// and render it within the ClickCounter component. How can you pass the onClick 
// event handler to the CounterButton component?

