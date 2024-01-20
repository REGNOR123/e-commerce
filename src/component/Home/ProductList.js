import React, { useEffect, useState } from "react";
import './ProductList.css'
  
export const ProductList=()=>{

    const [productList, setProductList] = useState([]);

    useEffect(()=>{
        getProductData();
         
    },[]);
    const getProductData = async()=>{
        let result = await fetch('http://localhost:5000/product',{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setProductList(result);
    }
    const handleSearch= async(event)=>{
        const key = event.target.value;
        if(key){

      
        let result = await fetch(`http://localhost:5000/search/${key}`,{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        if(result && key){
            setProductList(result);
        }
    } else {
        getProductData();
        
    }

    }
    return(
        <>
    
      <div className="productList">
      <h2>All Products</h2>
      <input type="search" placeholder="Search Product" onChange={handleSearch}/>
      <ul className="headers">
             <li>S. NO</li>
             <li>Name</li>
             <li>Category</li>
             <li>Company</li>
             <li>Price</li>
            </ul>
        
        { productList.length>0 ? productList.map((item,index)=>
            <ul key={item._id}>
             <li>{index+1}</li>
             <li>{item.productName}</li>
             <li>{item.productCategory}</li>
             <li>{item.productCompany}</li>
             <li>{item.productPrice}</li>
            </ul>
        )   : <h1>No Record Found</h1>   }

      </div>
      </>
        
    );
}