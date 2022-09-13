import React from "react"
export class Container extends React.Component{
    render(){
        return (
            <div className="container">
                <h1>{this.props.title}</h1>
                <hr />
                {this.props.children}
            </div>
        )
    }
}