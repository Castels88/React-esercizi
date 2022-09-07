import React from "react";
export class UncontrolledLogin extends React.Component{
    handleFormLogin=(event)=>{
        event.preventDefault()
        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log(
            {
                username,
                password,
                remember,
            }
        )
    }
    render(){
        return (
            <div>
                <h3>Uncontrolled Login</h3>
                <form onSubmit={this.handleFormLogin}>
                    <input autoFocus type="text" name="username" />
                    <input type="password" name="password" />
                    <input type="checkbox" name="remember" />
                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}