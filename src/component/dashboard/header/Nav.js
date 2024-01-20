import React from "react";
import {Link, useNavigate} from "react-router-dom";

import './Nav.css'

export const Nav=()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();              // using 'useNavigate(), hook to navigate on other component
    



    

    const handleLogout=()=>{
        localStorage.clear();
        navigate('/signup')

    }
    return(
        <>
        <div>
            <img alt='E-Commerce logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevX7N2oNJPRYSQJ1KvkXGKF-W4vBgQ37ALA&usqp=CAU' className="logo"/>
            <img src="logo512.png" alt="Avatar" className=" profilePic"/>
            { auth ? (
                 <ul className="nav-ul">
                 <li ><Link to='/'>Home</Link></li>
                 <li ><Link to='/add-product'>Add Product</Link></li>
                 <li ><Link to='/update'>Update Product</Link></li>
                 {/* <li ><Link to='/edit'>Edit Product</Link></li> */}
                 <li ><Link to='/profile'>Profile</Link></li>
                 <li ><Link onClick={handleLogout} to='/signup'>Logout ( {JSON.parse(auth).userName})</Link></li>
                 </ul>
            ):(
                <ul className="nav-ul nav-right">
                <li ><Link to='/signup'>SignUp</Link></li>
                <li ><Link to='/login'>Login</Link></li>
                </ul>
            )   
        }
    
        </div>
        </>
    );

}