import React from "react";
import {Routes} from "react-router-dom"
import {Container} from "./Container"
import {Route} from "react-router-dom"
import {Welcome} from "./Welcome"
export function App (){

    return (
        <Container title={
            <div>
                <h1>My App </h1>
            </div>
        }>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
            </Routes>
        </Container>
    )
}
// // React Router - 01
// // Create an App component that wraps a Routes 
// // component and add a single Route to the / path that renders 
// the Welcome component from Function Components 01, passing 
// it a name prop. Render the App component within a BrowserRouter component.

