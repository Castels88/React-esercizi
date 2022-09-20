import {BrowserRouter} from "react-router-dom"
import { App } from "./App"
import React from "react"

export function Root(){
    return(
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    )
}