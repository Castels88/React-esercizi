import React from "react";
import {Routes, Route, Link} from "react-router-dom"
import {Container} from "./Container"
import {Welcome} from "./Welcome"
import {Message} from "./Message"
import { Counter } from "./Counter";
import { GithubUser } from "./GithubUser";
import { Login } from "./Login"
export function App (){
    return (
        <Container title={
            <div>
                <h1>My App </h1>
                
            </div>
        }>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="*" element={<div>
                    <p>not found</p>
                        <Link to="/">go home</Link>
                </div>}/>
            </Routes>
            
        </Container>
    )
}
// React Router - 05
// Add a Not Found route that renders when a user navigates to a path that does not exist.