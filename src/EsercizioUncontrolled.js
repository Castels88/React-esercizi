import React, { createRef } from "react";

export class EsercizioUncontrolled extends React.Component{
    _formRef = createRef()
    handleFormSubmit=(event)=>{
        event.preventDefault()
        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const checkbox = event.target.elements.remember.checked
    }
    render(){
        return (
    <div>
        <h3>my uncontrolled form </h3>
        <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
            <input type="text" name="username"  />
            <input type="password" name="password"  />
            <input type="checkbox" name="remember" />
            <button type="submit">login</button>
            <button type="reset">reset</button>
        </form>
    </div>
    
)
    }
}