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
                <div>
                    <Link to="/counter">Counter</Link> | <Link to="/login">Login</Link> | 
                    <Link to="/message">Message</Link>
                </div>
            </div>
        }>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/counter" element={<Counter/>}/>
                <Route path="/:username" element={<GithubUser username="Castels88"/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/message" element={<Message/>}/>
            </Routes>
            
        </Container>
    )
}
// React Router - 04
// Add three Links within the main App component and use them to navigate to all three routes.