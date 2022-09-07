import React from "react";
export class UncontrolledLogin extends React.Component{
    handleFormLogin=(event)=>{
        event.preventDefault()
        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked
        console.log({
            username,
            password,
            remember,
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleFormLogin}>
                    <input type="text" name="username" />
                    <input type="text" name="password" />
                    <input type="text" name="remember" />
                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}