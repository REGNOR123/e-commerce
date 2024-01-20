import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './SignUp.css'
export const SignUp =()=>{
    const [userName, setUserName]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();              // using 'useNavigate(), hook to navigate on other component
     
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate('/');       // it work as a function and took only path as a parametor
        }
    },[])

    const handleClick= async()=>{
        let result = await fetch('http://localhost:5000/signup', {
            method: 'post',
            body: JSON.stringify({userName,email,password}),
            headers:{'Content-Type':'application/json'},
        });
        result= await result.json();
        
            localStorage.setItem('user',JSON.stringify(result.result)); // saving the users information in loacl storage
            localStorage.setItem('token',JSON.stringify(result.auth)); // saving the token into local storage
            navigate('/')       // it work as a function and took only path as a parametor
        
            
    }
    return(
        
        <>
        <div>
             
            <div className="SignUp">
            <h1>Sign Up</h1>
            <input type="text" placeholder="UserName" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type="button" onClick={handleClick}>Submit</button>
            </div>

        </div>
        </>
    );
}