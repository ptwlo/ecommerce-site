import React, {useState, useEffect} from 'react';
import data from '../data';
import {Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
function HomeScreen(props) {
    const [products, setProduct] = useState([]);
    useEffect(()=>{
        effect
        return ()=>{
            //
        };
    }, [])
    return <>
        <ul className="products">
            {
                data.products.map(product =>
                    <li>
                        <div className="product">
                            <Link to={'product/' + product._id}><img className="product-img" src={product.images} alt="product" /></Link>
                            <div className="product-name"><Link to={'product/' + product._id}>{product.name}</Link></div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">${product.price}</div>
                            <div className="product-rating">{product.rating} Stars ({product.numReviews})</div>

                        </div>
                    </li>
                )
            }
        </ul>
    </>
}

export default HomeScreen;