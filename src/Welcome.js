import React from "react"
import { Age } from "./Age"
export class Welcome extends React.Component{
    render(){
        return(
            <div>
                {
                    this.props.name
                    ? <p><strong>Ciao, {this.props.name}</strong></p>
                    : <p>Ciao, Sconosciuto</p>
                    
                }
                {/* {
                    this.props.age > 18 && <Age age={ this.props.age}/>
                    
                }
                 */}
                {/* {
                    this.props.age && <Age age={this.props.age}/>
                } */}
                {
                    this.props.age?
                    this.props.age >= 18 && <Age age={this.props.age}/>:
                    this.props.age <= 65 && <Age age={this.props.age}/>
                }

            </div>
        ) 
    }
}

// in questo caso utilizzando elementi condizionali posso decidere di settare una opzione 
// qualora non venga stabilito un nome


// Esercizio 4 Props
// What happens if the name prop is a JSX expression instead of a string? 
// How do you pass a prop that contains a JSX expression? 
// Modify the value passed to the name prop so that it's contained within a strong tag.

// Conditional Rendering - 01
// Modify the Welcome component so that 
// the Age component is rendered only if the age prop is greater than 18.

// Conditional Rendering - 02
// Modify the Welcome component so that the Age component is rendered only if the age prop is present.

// Conditional Rendering - 03
// Modify the Welcome component so that the Age component is rendered only 
// if the age prop is greater than 18 and less than 65.