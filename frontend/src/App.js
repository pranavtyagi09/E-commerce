import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
    <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <Link to="/" >Amazing</Link>
                </div>
                <div className="header-links">
                    <a href="cart.html">Cart</a>
                    <a href="signin.html">Sign In</a>
                </div>
            </header>
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                    <li><a href="index.html">Pants</a></li>
                    <li><a href="index.html">Shirt</a></li>
                </ul>
            </aside>
            <main className="main">
                <div className="content">
                <Route path="/product/:id" component={ProductPage} />
                  <Route path="/" exact={true} component={HomePage} />
                    
                </div>
            </main>
            <footer className="footer">
                All right reserved.
            </footer>
        </div>
      </BrowserRouter>
  );
}

export default App;
