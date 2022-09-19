import { useState } from "react"
export function CustomHookLogin(){
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false
    })
    function handleInputChange({target}){
        const {name, value, type, checked} = target
        setData({
            ...data,
            [name]: type === "checkbox" ? checked : value,
        })
    }
    function handleLogin(){
        console.log(data)
    }
    return({
        username: data.username,
        password: data.password,
        remember: data.remember,
        inputChange: handleInputChange,
        onLogin: handleLogin,
    })
}