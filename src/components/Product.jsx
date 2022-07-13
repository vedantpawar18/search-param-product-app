import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link } from "react-router-dom";

const Product = () => {
    const [product, setProduct] = useState({});
    const {id} =useParams();
    const [page, setPage]= useState(Number(searchParams.get("page")) || 1);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() =>{
      setSearchParams({
        page
    })
        if (id){
            fetch(`http://localhost:8080/products/${id}?page=${page}`)
            .then((r) => r.json())
            .then((d) => setProduct(d)); 
        }
    },[id,page]);
  return (
    <div>Product id: {id} <div>{product.name}</div> <div>{product.price}</div> <div><Link to="/products">More Details</Link></div>
          <div>
          <button disabled={page===1} onClick={()=> setPage(1)}>1</button>
            <button disabled={page===2} onClick={()=> setPage(2)}>2</button>
          </div>
      </div>
  )
}

export default Product