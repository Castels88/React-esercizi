import React from "react"
export class Welcome extends React.Component{
    render(){
        return(
            <div>
                {
                    this.props.name
                    ? <p>Ciao, {this.props.name}</p>
                    : <p>Ciao, Sconosciuto</p>
                }
            </div>
        ) 
    }
}

// in questo caso utilizzando elementi condizionali posso decidere di settare una opzione 
// qualora non venga stabilito un nome