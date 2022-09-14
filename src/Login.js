import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function Login(){
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false,
    })
    function handleInputChange(event){
        const {name, type, value, checked} = event.target
        setData((data)=>{
            return{
                ...data,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    return(
        <Form>
            <Form.Control onChange={handleInputChange} type="text" name="username" value={data.username} placeholder={"username"} />
            <Form.Control onChange={handleInputChange} type="password" name="password" value={data.password} placeholder={"password"} />
            <Form.Check onChange={handleInputChange} type="checkbox" name="remember" checked={data.remember} />
        </Form>
    )
}

