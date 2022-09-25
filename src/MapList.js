import React from "react";
export function MapList (){
    const array = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse','elio']
    return(
        <div>
            <h1>lista ordinata</h1>
            <ul>
                    {array.map((value)=> <li key={value}>{value}</li> )}
            </ul>
        </div>
    )
}