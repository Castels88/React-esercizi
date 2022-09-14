export function Sum({number=[1,2,3,5]}) {
    return(
        <div>
            <h1>
                { number.reduce((accumulator, value)=>{
                    return accumulator + value;
                }, 0) }
            </h1>
        </div>
    )
}

// What happens if the numbers prop of the Sum component is not set? 
// la somma e zero
// How can you set a default value for this prop?
// facciamo esplodere il props inserende l'array di default