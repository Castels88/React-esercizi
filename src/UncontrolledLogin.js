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
                <form className="flex flex-col" onSubmit={this.handleFormLogin}>
                    <input className="border border-black, w-64" autoFocus type="text" name="username" />
                    <input className="border border-black, w-64" type="password" name="password" />
                    <input className="border border-black" type="checkbox" name="remember" />
                    <button className="border border-black, p-1, bg-sky-500 hover:bg-sky-700, w-24" type="submit">Login</button>
                    <button className="border border-black, p-1, bg-sky-500 hover:bg-sky-700, w-24 " type="reset">Reset</button>
                </form>
            </div>
        )
    }
}