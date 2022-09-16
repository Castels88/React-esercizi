import React, { Fragment } from "react";
import { ClickCounter } from "./ClickCounter";
import { Container } from "./Container";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext ";
import { Counter } from "./Counter"
import { GithubUser } from "./GithubUser";

export function App (){

    return (
    <Container title={"La mia App"}>
        <Counter/>
        <GithubUser username="Castels88" />
    </Container>
    )
}


