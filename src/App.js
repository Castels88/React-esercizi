import React, { Fragment } from "react";
import { Container } from "./Container";
import { Counter } from "./Counter"
import { GithubUser } from "./GithubUser"
import { GithubUserList } from "./GithubUserList";

export function App (){

    return (
    <Container title={"La mia App"}>
        <Counter/>
        <GithubUserList username="Castels88"/>
    </Container>
    )
}


