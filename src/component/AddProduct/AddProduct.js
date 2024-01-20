import { useState } from "react";

import './AddProduct.css'

export const AddProduct=()=>{
    const [productName, setProductName]= useState("");
    const [productCategory, setProductCategory]= useState("");
    const [productCompany, setProductCompany]= useState("");
    const [productPrice, setProductPrice]= useState("");
    const [error, setError] = useState("");

    const handleAdd= async()=>{

        if(!productName||!productCategory||!productCompany||!productPrice)
        { 
            setError(true);
            return false;
        }
 
        const userId = JSON.parse(localStorage.getItem('user'))._id; // getting the current user id

        let result = await fetch('http://localhost:5000/add-product',{
            method:'post',
            body: JSON.stringify({userId,productName,productCategory,productCompany,productPrice}),
            headers:{
                'Content-Type':'application/json',
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        result = await result.json();
        
        if(result){
        setProductName('');
        setProductCategory('');
        setProductCompany('');
        setProductPrice('');
        setError('');
    }


    }

    const handleCancel=()=>{
        setProductName('');
        setProductCategory('');
        setProductCompany('');
        setProductPrice('');
        setError('');

    }
    return(
        <>
        <div className="AddProduct">
        
             <h1>Add Products details</h1>
             <input type="text" placeholder="Enter Product Name" value={productName} onChange={(e)=>setProductName(e.target.value)}/>
             {error && !productName && <span>* Enter The Product Name </span>}
             <input type="text" placeholder="Enter Product category" value={productCategory} onChange={(e)=>setProductCategory(e.target.value)}/>
             {error && !productCategory && <span>* Enter Product category </span>}
             <input type="text" placeholder="Enter Product Company" value={productCompany} onChange={(e)=>setProductCompany(e.target.value)}/>
             {error && !productCompany && <span>* Enter Product Company </span>}
             <input type="currency" placeholder="Enter Product Price" value={productPrice} onChange={(e)=>setProductPrice(e.target.value)}/>
             {error && !productPrice && <span>* Enter Product Price </span>}
            
             <div className="addCancel-button">

             <button type="button" onClick={handleAdd}>Add</button>
             <button type="button" onClick={handleCancel}>Cancel</button>
             </div>

 
         </div>
        </>
    )
}