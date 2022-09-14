import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function ClickCounter({inizialValue = 0}){
    const [counter, setCounter] = useState(inizialValue)
    function IncrementValue(){
        setCounter(c => c + 1 )
    }
    return(
        <Card border="primary" style={{width: "15rem"}}> 
            <h2>Click Counter</h2>
            <h3>{counter}</h3>
            <Button variant="success" style={{width: "15rem"}} onClick={IncrementValue}>Incrementa</Button>{''}
        </Card>
    )
}