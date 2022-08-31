import React from "react";
export class SecondCounter extends React.Component{
    constructor(props){
        super(props)
        this._interval = this.state = {count : this.props.NumeroIniziale};
        setInterval(()=>{
            this.setState((state)=>{
                return{
                    count: state.count + 1
                }
            })
        },500)
    }
    componentDidUpdate(){
        if(this.state.count == 10){
            this.state.count = this.props.NumeroIniziale
        }
    }
    
    
    render(){
        return <h3>{this.state.count}</h3>
    }
}

// Reset the counter to the initial value received as a prop when the value is greater than ten 
// times that initial value. Do so in the componentDidUpdate lifecycle method.