import React, { Fragment } from "react";
import { ClickCounter } from "./ClickCounter";
import { Container } from "./Container";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext ";
import { Counter } from "./Counter"

export function App (){

    return (
    <Container title={"La mia App"}>
        <Counter/>
    </Container>
    )
}


