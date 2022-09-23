import React from "react";
import {Routes, Route} from "react-router-dom"
import {Container} from "./Container"
import {Welcome} from "./Welcome"
import { Counter } from "./Counter";
import { Login } from "./Login";

export function App (){
    return (
        <Container title={
            <div>
                <h1>My App </h1>
            </div>
        }>
            <Routes>
                <Route path="/:name" element={<Welcome/>}/>
                <Route path="/counter" element={<Counter/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            
        </Container>
    )
}
// React Router - 02
// Add a new Route to the /counter path that 
// renders the Counter component from useState 01.

