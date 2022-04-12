import {Link} from 'react-router-dom';
export default function Card(props){
    return (
      <div className="card shadow-lg p-3 pb-4 mb-5 bg-body rounded" style={{height:"500px"}}>
    <img src={props.product.image} height="300px" className="card-img-top" alt={props.product.title}/>
    <div className="card-body">
        <p style={{color:'rgb(9 92 131)', height:'70px'}} className="card-title">{props.product.title}</p>
        
        <div className="d-flex justify-content-between mt-2">
            <h6 className="card-subtitle" style={{color:'#FD5D5D'}}>{props.product.category}</h6>
            <h6>{props.product.price} $</h6>
        </div>
    </div>
          <div><Link className="btn btn-outline-dark" to={`/products/${props.product.id}`}>Detailes</Link></div>
    </div>
    );
}