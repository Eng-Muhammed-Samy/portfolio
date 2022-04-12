import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetailes(){
  const param = useParams();
    const [product, setProduct] = useState([]);
   const fetchOneProductById = ()=>{
    fetch(`https://fakestoreapi.com/products/${param.id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
    }

    useEffect(()=>{
        fetchOneProductById()
    },[]);
    console.log(product);

    return(
        <div className="container">
    <div className="card shadow-lg p-3 pb-4 mb-5 bg-body rounded" style={{maxwidth: '540px'}}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={product.image} className="img-fluid rounded-start" alt={product.title}/>
      </div>
      <div className="col-md-8">
        <div className="card-body mt-5 ms-4 p-5">
          <h5 className="card-title my-2">{product.title}</h5>
          <h6 className="my-3 mb-4">{product.category}$</h6>
          <h6 className="card-text text-muted mb-4">{product.description}</h6>
          <h5>{product.price}$</h5>
          <p className="card-text mt-4"><small className="text-muted">Last updated 3 mins ago</small></p>
          <Link className="btn btn-sm btn-outline-dark" to='/products'>Return</Link>
        </div>
      </div>
    </div>
  </div>
  </div>);
}