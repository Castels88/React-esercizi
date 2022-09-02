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