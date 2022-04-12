import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav style={{backgroundColor:'#FD5D5D'}} className="navbar navbar-expand-lg navbar-dark mb-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Portfolio</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              <Link className="nav-link" to="/products">Products</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/counter">Counter</Link>
            </div>
          </div>
        </div>
      </nav>
    )
}