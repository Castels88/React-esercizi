import React, { Fragment } from "react";
import { ClickCounter } from "./ClickCounter";
import { Container } from "./Container";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext ";

export class App extends React.Component{
render(){
    return (
    <Container title={"La mia App"}>
        <LanguageContext.Provider>
            <DisplayLanguage/>
        </LanguageContext.Provider>
        <ClickCounter InitialValue={0}/>
        
    </Container>
    )
}
}

