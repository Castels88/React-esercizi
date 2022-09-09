import React from "react";
export class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {count: this.props.InitialValue};
        setInterval(()=>{
            this.setState((state)=>({
                count: state.count + this.props.IncrementValue
            }))
            if(this.state.count === 10 ){
                this.state.count = 1
            }
        },500)
    }
    
    
    
    render(){
        const CountStyle = {
            backgroundColor: "beige",
            color:"red",
            padding: "20px",
            width: "10px",
        }
        return <div style={CountStyle} >{this.state.count}</div>
    }
}