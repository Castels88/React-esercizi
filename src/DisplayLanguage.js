import React from "react";
import { LanguageContext } from "./LanguageContext ";
import { useContext } from "react";

export function DisplayLanguage (){
    const language = useContext(LanguageContext)
    return(
            <h3>Currente Language: {language}</h3>
    )
}