import React, { Fragment } from "react";
import { Container } from "./Container";
import { ClickCounter } from "./ClickCounter"
export function App (){

    return (
    <Container title={"La mia App"}>
        <ClickCounter/>
    </Container>
    )
}


