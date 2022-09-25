import React from "react";
export function EserciziArrayMethod(){
    const characters = [
        {
            name: 'Luke Skywalker',
            height: '172',
            mass: '77',
            eye_color: 'blue',
            gender: 'male',
        },
        {
            name: 'Darth Vader',
            height: '202',
            mass: '136',
            eye_color: 'yellow',
            gender: 'male',
        },
        {
            name: 'Leia Organa',
            height: '150',
            mass: '49',
            eye_color: 'brown',
            gender: 'female',
        },
        {
            name: 'Anakin Skywalker',
            height: '188',
            mass: '84',
            eye_color: 'blue',
            gender: 'male',
        },
    ];
    return(
        <div>
            <h1>Map Method</h1>
            <div>get array of all the name</div>
            {characters.map((value)=> <p key={value.name}>{value.name}</p> )}
            <br />
            <div>Get an array of all heights</div>
            {characters.map((value)=> <p key={value.height}>{value.height}</p> )}
            <br />
            <div>Get an array of objects with just name and height properties</div>
            {characters.map((value)=> <p>Nome:{value.name} <br /> Altezza:{value.height}</p> )}
            <br />
            <div>Get an array of all first names</div>
            {characters.map((value)=> <p>{value.name.split(" ")[0]}</p> )}
            <br />
            <h1>Reduce Method</h1>
            <div>Get the total mass of all characters</div>
            {characters.reduce((acc,cur)=> {
                const number = parseInt(cur.mass)
                return acc + number
            },0)}
            <br />
            <div>Get the total height of all characters</div>
            {characters.reduce((acc,cur)=> {
                const number = parseInt(cur.height)
                return acc + number
            },0)}
            <br />
            <div>Get the total number of characters in all the character names</div>
            {characters.reduce((acc, cur)=>{
                return acc + cur.name.length
            },0)}
        </div>

    )
}