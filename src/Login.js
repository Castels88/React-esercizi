import React from "react";
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomHookLogin } from "./CustomHookLogin";

export function Login(){
    const {username, password, remember, inputChange, onLogin} = CustomHookLogin({
        username: "",
        password: "",
        remember: false,
    })
    
    return(
        <Form>
            <Form.Control onChange={inputChange} type="text" name="username" value={username} placeholder={"username"} />
            <Form.Control onChange={inputChange} type="password" name="password" value={password} placeholder={"password"} />
            <Form.Check onChange={inputChange} type="checkbox" name="remember" checked={remember} />
            <button onClick={onLogin}>Submit</button>
        </Form>
    )
}

