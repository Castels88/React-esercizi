import React from "react"
export class Welcome extends React.Component{
    render(){
        return <p> Hello , {this.props.name}</p>
    }
}