import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Usecounter } from './UseCounter';
import React from 'react';

export function ClickCounter({inizialValue = 0}){
    const {counter, onIncrement, onDecrement, onReset} = Usecounter(inizialValue)
    return(
        <div border="primary" style={{width: "15rem"}}> 
            <h2>Click Counter</h2>
            <h3>counter is : {counter}</h3>
            <div><button onClick={onIncrement}>Incrementa</button></div>
            <div><button onClick={onDecrement}>Decrementa</button></div>
            <div><button onClick={onReset}>Reset</button></div>
        </div>
    )
}