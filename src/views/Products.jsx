import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/card/Card";

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
                      <Card product = {product}/>
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