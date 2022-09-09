import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export class ClickCounter extends React.Component{
    state = {
        count : this.props.InitialValue
    }
    
    IncrementValue = (event) => {
        console.log(event)
        this.setState((state)=>{
            return{
                count: state.count + 1
            }
        })
    }

    render(){
        return(
            <Card border="primary" style={{width: "15rem"}}> 
                <h2>Click Counter</h2>
                <h3>{this.state.count}</h3>
                <Button variant="success" style={{width: "15rem"}} onClick={this.IncrementValue}>Incrementa</Button>{''}
            </Card>
        )
    }
}