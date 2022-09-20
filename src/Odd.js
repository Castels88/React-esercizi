import React from "react";
const Odd = ( {frase} ) => {
    return ( 
    <div>
       <ul>
            {frase.map((c, index) => {
                return <li key={index}>{c}</li>
            })}
       </ul>
    </div>
     );
}
 
export default Odd;