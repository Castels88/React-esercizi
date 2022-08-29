import React from "react";
export class Counter extends React.Component{
    state = {
        count : this.props.InitialValue ?? 0
    }
    constructor(props){
        super(props)
        setInterval(()=>{
            this.setState(()=>{
                return{
                    count : this.state.count + 1                    
                }
            })
            
        },1000)
    }
    
    
    render(){
        return <div>{this.state.count}</div>
    }
}
