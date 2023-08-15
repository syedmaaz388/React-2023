import React, { useEffect, useState } from 'react'

export default function ProductList() {

    const [products, setProducts] = useState([]);
    const [url, setUrl] = useState("http://localhost:8000/products");

    const fetchProducts = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
    }
    useEffect(() => {
        fetchProducts();
    },[url]);


    function handleDelete(id){
        setProducts(products.filter(product => product.id !== id))
    }


  return (
   <section>
   <button className='all'  onClick={() => setUrl("http://localhost:8000/products")}>All</button>
   <button className='stock' onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock</button>
    {products.map((product) => (
        <div key={product.id} className='card' >
        <p className='head' >{product.name} </p>
        <p>${product.price}</p>
        <p className={product.in_stock ? "instock" : "outstock"} >{product.in_stock ? "In Stock" : " Out of Stock"}</p>
        <button onClick={() => handleDelete(product.id)} >Delete</button> 
        </div>
    ))}
   </section>
  )
}
