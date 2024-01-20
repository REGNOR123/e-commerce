import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './UpdateProduct.css'
  
export const UpdateProduct=()=>{

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
    const deleteProduct = async(id)=>{

        let result = await fetch(`http://localhost:5000/delete/${id}`,{
            method:'Delete',
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
    
        var v= window.confirm("Are u sure?");  
            if(v && result)
            {  
                getProductData(); 
            }
        };

    return(
        <>
       
      <div className="updateProductList">
      <h2>Update Products</h2>
      <ul className="headers">
             <li>S. NO</li>
             <li>Name</li>
             <li>Category</li>
             <li>Company</li>
             <li>Price</li>
             <li className="removeHeader">Update Item</li>
            </ul>
        
        {productList.map((item,index)=>
            <ul key={item._id}>
             <li>{index+1}</li>
             <li>{item.productName}</li>
             <li>{item.productCategory}</li>
             <li>{item.productCompany}</li>
             <li>{item.productPrice}</li>
             <li className="remove">
                <button onClick={()=>deleteProduct(item._id)}>Remove</button>
                <Link to={`/edit/${item._id}`}>Edit</Link>
             </li>
            </ul>

        )}

      </div>
      </>
        
    );
}