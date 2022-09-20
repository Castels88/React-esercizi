import React from "react";
import {Routes, Route} from "react-router-dom"
import {Container} from "./Container"
import {Welcome} from "./Welcome"
import {ClickCounter} from "./ClickCounter"
import { Counter } from "./Counter";
import { GithubUser } from "./GithubUser";
export function App (){
    return (
        <Container title={
            <div>
                <h1>My App </h1>
            </div>
        }>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/counter" element={<Counter/>}/>
                <Route path="/:username" element={<GithubUser username="Castels88"/>}/>
            </Routes>
            
        </Container>
    )
}
// React Router - 03
// Add a new Route to the users/:username path that renders a ShowGithubUser component that receives the username as a path parameter and renders the GithubUser 
// component from useEffect 03 by passing it the received username.