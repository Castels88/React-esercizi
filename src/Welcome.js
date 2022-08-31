import React from "react"
export class Welcome extends React.Component{
    render(){
        return(
            <div>
                {
                    this.props.name
                    ? <p><strong>Ciao, {this.props.name}</strong></p>
                    : <p>Ciao, Sconosciuto</p>
                }
                {
                    this.props.age
                    ? <p>you have {this.props.age} age</p>
                    : <p>Your age is ?</p>
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