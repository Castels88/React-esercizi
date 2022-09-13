import React from "react";
import { LanguageContext } from "./LanguageContext ";
export class DisplayLanguage extends React.Component{
    state = {
        language: "en"
    }
    handleChangeLanguage = (event)=>{
        this.setState({
            language: event.target.value
        })
    }
    render(){
        return(
            <div>
                <select value={this.state.language} onChange={this.handleChangeLanguage}>
                    <option value="en">English</option>
                    <option value="it">Italian</option>
                </select>
            </div>    
        )
    }
}