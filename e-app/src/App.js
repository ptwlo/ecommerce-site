// <!-- Time: 01:06:00 from 5:06:24 -->
import React from 'react';
import data from './data';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    // react-router-dom 5.2.0
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <a href="index.html">amazonia</a>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Category</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>X</button>
          <ul>
            <li>
              <a href="">Shirts </a>
            </li>
            <li>
              <a href="">Pants</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/products/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            <ul className="products">
              {
                data.products.map(product =>
                  <li>
                    <div className="product">
                      <img className="product-img" src={product.images} alt="product" />
                      <div className="product-name"><a href="product.html">{product.name}</a></div>
                      <div className="product-brand">{product.brand}</div>
                      <div className="product-price">${product.price}</div>
                      <div className="product-rating">{product.rating} Stars ({product.numReviews})</div>

                    </div>
                  </li>
                )
              }
            </ul>
          </div>
        </main>
        <footer className="footer">
          All rights reserved
            </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
