import React from "react";
export class CounterLifeCycling extends React.Component{
    

    state = {count : this.props.NumeroIniziale }
    
    

    componentDidMount(){
        this._interval= setInterval(()=>{
            this.setState((state)=>{
                return{
                    count: state.count + this.props.IncrementValue
                }
            })
        },this.props.Timeout)
    }
    render(){
        return <h1>{this.state.count} life cycling</h1>
    }
}

// Component Lifecycle - 01
// Modify the Counter component so that the interval is initialized within the componentDidMount 
// life cycle method instead of the constructor. Is the constructor still required?
// answer
// no the costructor is not more necessary