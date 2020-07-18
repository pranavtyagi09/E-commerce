import React from 'react';
import data from '../data'
import { Link } from 'react-router-dom';

function HomePage(props) {
    return (<ul className="products">
    {
      data.products.map(product =>
      <li>
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