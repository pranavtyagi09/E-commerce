import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import ProductPage from './ProductPage';

function HomePage(props) {

  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    const fetchData = async () => {
      const {data} = await axios.get("/api/products");
      setProducts(data);
    }

    fetchData();
    return () => {
      //
    };
  }, [])

    return (<ul className="products">
    {
      products.map(product =>
      <li key={product._id}>
          <div className="product">
              <img className="product-image" src={product.image} alt="product" />
                <Link to={'/product/' + product._id}>
                  <div className="product-name">{product.name}</div>
                </Link>
              <div className="product-brand">{product.brand}</div>
              <div className="price">${product.price}</div>
          </div>
      </li>)
    }
  </ul>);
}
export default HomePage;