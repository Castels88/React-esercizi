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
            <div className="flex flex-col">
                <h3 className="my-3">Controlled component</h3>
                <input className="border border-black, w-64" type="text" name="username" value={this.state.username} onChange={this.HandleInputChange} />
                <input className="border border-black, w-64" type="password" name="password" value={this.state.password} onChange={this.HandleInputChange}/>
                <input className="border border-black, w-64" type="checkbox" name="remember" checked={this.state.remember} onChange={this.HandleInputChange}/>
                <button className="border border-black, p-1, bg-sky-500 hover:bg-sky-700, w-24 " disabled={!this.state.username||!this.state.password} onClick={this.Onlogin}>Login</button>
                <button className="border border-black, p-1, bg-sky-500 hover:bg-sky-700, w-24" onClick={this.ResetState} >Reset</button>
            </div>
        )
    }
}

// Forms - 04
// Add a "reset" button to the Login component that clears the content of all three inputs when clicked.