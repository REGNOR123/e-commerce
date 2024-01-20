import { useEffect, useState } from "react";
import {useParams, useNavigate} from "react-router-dom";
import './EditProduct.css'

export const EditProduct=()=>{
    const [productName, setProductName]= useState("");
    const [productCategory, setProductCategory]= useState("");
    const [productCompany, setProductCompany]= useState("");
    const [productPrice, setProductPrice]= useState("");
    const params = useParams();
    const navigate = useNavigate();


    useEffect(()=>{
        getEditData();
    },[]);
    const getEditData= async()=>{
        console.log(productName,productCategory,productCompany,productPrice)

            let result = await fetch(`http://localhost:5000/product-edit/${params.id}`,{
                headers:{
                    authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            result = await result.json();
            if(result)
            {
            setProductName(result.productName);
            setProductCategory(result.productCategory);
            setProductCompany(result.productCompany);
            setProductPrice(result.productPrice);

        }

    }

    const handleEdit= async()=>{

        let result = await fetch(`http://localhost:5000/product-edit/${params.id}`,{
            method:'put',
            body:JSON.stringify({productName,productCategory,productCompany,productPrice}),
            headers: {
                "Content-Type":"application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }

        })
        result = await result.json();
        console.log(result);
        navigate('/');
    }

    const handleCancel=()=>{
        setProductName('');
        setProductCategory('');
        setProductCompany('');
        setProductPrice('');
    }
    const handleBack=()=>{
        setProductName('');
        setProductCategory('');
        setProductCompany('');
        setProductPrice('');
        navigate('/update');
    }

    return(
        <>
        <div className="editProduct">
        
             <h1>Edit Product details</h1>
             <input type="text" placeholder="Enter Product Name" value={productName} onChange={(e)=>setProductName(e.target.value)}/>   
             <input type="text" placeholder="Enter Product category" value={productCategory} onChange={(e)=>setProductCategory(e.target.value)}/>       
             <input type="text" placeholder="Enter Product Company" value={productCompany} onChange={(e)=>setProductCompany(e.target.value)}/>           
             <input type="currency" placeholder="Enter Product Price" value={productPrice} onChange={(e)=>setProductPrice(e.target.value)}/>
               
             <div className="addCancel-button">
             <button type="button" onClick={handleEdit}>Edit</button>
             <button type="button" onClick={handleCancel}>Clear</button>
             <button type="button" onClick={handleBack}>Go Back</button>
             </div>
         </div>
        </>
    )
}