import React from "react";
import {Routes, Route} from "react-router-dom"
import {Container} from "./Container"
import {Welcome} from "./Welcome"
import {ClickCounter} from "./ClickCounter"
import { Counter } from "./Counter";
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
            </Routes>
            
        </Container>
    )
}
// React Router - 02
// Add a new Route to the /counter path that 
// renders the Counter component from useState 01.

