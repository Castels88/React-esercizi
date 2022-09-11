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
        const myStyle = {
            backgroundColor:this.state.password.length <= 8 ? "red":"green",
            width:"95px",
        }
        return(
            <div className="flex flex-col">
                <h3 className="my-3">Controlled component</h3>
                <input className="border border-black, w-64" type="text" name="username" value={this.state.username} onChange={this.HandleInputChange} />
                <input className="border border-black, w-64" type="password" name="password" value={this.state.password} onChange={this.HandleInputChange}/>
                <input className="border border-black, w-64" type="checkbox" name="remember" checked={this.state.remember} onChange={this.HandleInputChange}/>
                <button style={myStyle} disabled={!this.state.username||!this.state.password} onClick={this.Onlogin}>Login</button>
                <button className="border border-black, p-1, bg-sky-500 hover:bg-sky-700, w-24" onClick={this.ResetState} >Reset</button>
            </div>
        )
    }
}

// Styling Components - 03
// Modify the Login component from Forms 03 so that the "login" button background color is 
// "red" when the inputted password's length is shorter than 8 characters, green otherwise.