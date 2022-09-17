import React, { Fragment } from "react";
import { Container } from "./Container";
import { Counter } from "./Counter"
import { GithubUser } from "./GithubUser"

export function App (){

    return (
    <Container title={"La mia App"}>
        <Counter/>
        <GithubUser username="Castels88"/>
    </Container>
    )
}


