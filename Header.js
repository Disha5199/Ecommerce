// // import React from "react";

// export default function Header({ cartCount }) {
//   return (
//     <div className="header">
//       <h1>My Store</h1>
//       <div className="cart-icon">
//         🛒 <span className="cart-count">{cartCount}</span>
//       </div>
//     </div>
//   );
// }
// 
import React from "react";

export default function Header({ cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand"  href="#">ENJ Store</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarScroll" 
          aria-controls="navbarScroll" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>
            
          </ul>
          
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className="cart-icon">
            🛒 <span className="badge bg-danger">{cartCount}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
