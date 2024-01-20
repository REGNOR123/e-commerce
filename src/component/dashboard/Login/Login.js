import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'
export const Login=()=>{
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();


    const handleLogin= async()=>{

        let result = await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email, password}),
            headers:{'Content-Type':'application/json'}
        });
        result = await result.json();

        if(result.auth)
        {
            localStorage.setItem('user',JSON.stringify(result.user)); // saving the users information in loacl storage
            localStorage.setItem('token',JSON.stringify(result.auth)); // saving the token into local storage
            navigate('/')
        }
        else {
            alert(result.result);
        }
    }
    return(
        
        <>
        <div>
             
            <div className="login">
            <h1>User Login</h1>
            <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type="button" onClick={handleLogin}>Login</button>
            </div>

        </div>
        </>
    );
}