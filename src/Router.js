import React from "react";
import { Nav } from './component/dashboard/header/Nav.js';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // STEP-2, creating router and links to navigate on pages
import { SignUp } from './component/dashboard/SignUp/SignUp.js';
import { Login } from "./component/dashboard/Login/Login.js";
import { PrivateRoutes } from "./component/Private/PrivateRoutes.js";
import { AddProduct } from "./component/AddProduct/AddProduct.js";
import { ProductList } from "./component/Home/ProductList.js";
import { UpdateProduct } from "./component/UpdateProduct/UpdateProduct.js";
import { EditProduct } from "./component/EditProduct/EditProduct.js"
import { Profile } from "./component/dashboard/Profile/Profile.js";
 

export const Router=()=>{
    return(
        <>
       <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateRoutes/>}>
          <Route path ='/' element={<ProductList/>}></Route>
          <Route path ='/add-product' element={<AddProduct/>}></Route>
          <Route path ='/update' element={<UpdateProduct/>}></Route>
          <Route path ='/edit/:id' element={<EditProduct/>}></Route>
          <Route path ='/logout' element={<h1>Logout Component</h1>}></Route>
          <Route path ='/profile' element={<Profile/>}></Route>
        
          </Route>
          <Route path ='/signup'element={<SignUp/>}/>
          <Route path ='/login' element={<Login/>}/>
          
        </Routes>
      </BrowserRouter>
        </>
    );

}