import React, {useState, useEffect} from 'react';
import {Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
function HomeScreen(props) {
    const [products, setProduct] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const {data} = await axios.get("/api/products");
            setProduct(data);
        }
        fetchData();
        return ()=>{
            //
        };
    }, [])
    return <>
        <ul className="products">
            {
               products.map(product =>
                    <li key={product.id}>
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