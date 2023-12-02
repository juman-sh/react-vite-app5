import React, { useState } from 'react'
import { useEffect } from 'react';

export default function Products() {

  useEffect(() =>{
    console.log('rahaf');
  },[])

  let [products,setProducts] = useState([]);



  const getProducts  = async()=>{
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    setProducts(data);
  }

  useEffect(() =>{
    getProducts();
  },[]);
   
  return (
    <>
    <div>Products</div>
    {
      products.map((product)=>{
        return(
          <div className='row'>

          <div className='product col-md-3 ' key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} className='w-100'/>
            </div>
          </div>
        )
      })
    }
    </>
    
  )
}
/* <div>Products</div>
<p>our Products {products[0].title}</p>
<button onClick={()=>changeProducts([{id:1 ,title:"products four" ,price:1000, sale:true},
{id:2 ,title:"products two" ,price:2000 ,sale:true},
 {id:3 ,title:"products three" ,price:3000,sale:false}])}>click</button>*/