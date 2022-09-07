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
    render(){
        return(
            <div>
                <input type="text" name="username" value={this.state.username} onChange={this.HandleInputChange} />
                <input type="password" name="password" value={this.state.password} onChange={this.HandleInputChange}/>
                <input type="checkbox" name="remember" checked={this.state.remember} onChange={this.HandleInputChange}/>
            </div>
        )
    }
}

// Forms - 02
// Create a Login component containing three 
// inputs: a username input, a password input and a remember checkbox. 
// All three inputs should be controlled components.