import { Welcome } from "./Welcome"
import react from "react"
export class InteractiveWelcome extends react.Component{
    state = {
        username:""
    }
    handleInputChange=(event)=>{
        const value = event.target.value
        console.log(value)
        this.setState({
            username : value
        })
    }
    render(){
        return (
            <div>
                <h3>Welcome interattivo</h3>
                <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                <Welcome name={this.state.username}/>
            </div>
        )
    }
}



// Forms - 01
// Create an InteractiveWelcome component that renders an input tag and the Welcome component. Pass the current content 
// of the input tag to the name prop of the Welcome component. The input tag should be a controlled component.