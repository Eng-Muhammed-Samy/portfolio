import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products(){
   let [data, setData] = useState([]);

   const fetchAllProduct = () =>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setData(json))
   }
   useEffect(()=>{
       fetchAllProduct();
   },[])

// console.log(data);
    return (
    <div className="container">
    
        <div className="row">
            {
                data.length?
                data.map((product)=>{
                    return <div key={product.id} className="col-sm-12 col-md-6 col-lg-4 my-2 px-4">
                        <div className="card shadow-lg p-3 pb-4 mb-5 bg-body rounded" style={{height:"500px"}}>
                        <img src={product.image} height="300px" className="card-img-top" alt={product.title}/>
                        <div className="card-body">
                            <p style={{color:'rgb(9 92 131)', height:'50px'}} className="card-title">{product.title}</p>
                            
                            <div className="d-flex justify-content-between mt-2">
                                <h6 className="card-subtitle" style={{color:'#FD5D5D'}}>{product.category}</h6>
                                <h6>{product.price} $</h6>
                            </div>
                        </div>
                              <div><Link className="btn btn-outline-dark" to={`/products/${product.id}`}>Detailes</Link></div>
                        </div>
                    </div>
                })
                :
               <div className="d-flex justify-content-center my-5">
                <img width="350px" height="350px" src="https://mlcu.org.eg/Images/Loading.gif" alt="" />
               </div>
            }
            
        </div>
        </div>
    );
}