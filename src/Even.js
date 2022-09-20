import React from "react";
const Even = ({frase}) => {
    return ( 
        <div>
            <h5>Even.</h5>
            <ul>
                {frase.map((c, index) => {
                    return <li key={index}>{c}</li>
                })}
                <button>Delete</button>
            </ul>
        </div>
        );
    }


export default Even;