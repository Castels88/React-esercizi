import React from "react";
export class Login extends React.Component{
    state = {
        username: "",
        password: "",
        remember: false
    }
    HandleInputChange = (event)=>{
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked
        this.setState({
            [name] : type === "checkbox" ? checked : value 
        })
    }
    Onlogin = ()=>{
        console.log(this.state)
    }
    ResetState = ()=>{
        this.setState({
            username: "",
            password: "",
            remember: false
        })
    }
    render(){
        return(
            <div>
                <input type="text" name="username" value={this.state.username} onChange={this.HandleInputChange} />
                <input type="password" name="password" value={this.state.password} onChange={this.HandleInputChange}/>
                <input type="checkbox" name="remember" checked={this.state.remember} onChange={this.HandleInputChange}/>
                <button disabled={!this.state.username||!this.state.password} onClick={this.Onlogin}>Login</button>
                <button onClick={this.ResetState} >Reset</button>
            </div>
        )
    }
}

// Forms - 03
// Add a "login" button to the Login component. 
// This button should be disabled as long as the username and password inputs are empty. 
// When clicked, the event handler attached to the button should call an 
// onLogin function passed as a prop to the Login component, passing it the state.