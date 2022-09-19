import React, { Fragment } from "react";
import { ClickCounter } from "./ClickCounter"
import { DisplayLanguage } from "./DisplayLanguage";
import { useState } from "react";
import { LanguageContext } from "./LanguageContext "
export function App (){
    const [language, setLanguage] = useState("en")
    function handleChangeLanguage (event){
        setLanguage(event.target.value)
    }
    return (
        <div>
            <select value={language} onChange={handleChangeLanguage}>
                    <option value="en">English</option>
                    <option value="it">Italian</option>
                </select>
                <LanguageContext.Provider value={language}>
                    <DisplayLanguage/>
                </LanguageContext.Provider>
        </div>
    )
}


