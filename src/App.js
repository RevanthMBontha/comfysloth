import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';

import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Products,
  SingleProduct,
  PrivateRoute,
  AuthWrapper,
} from './pages';
import SingleProductPage from './pages/SingleProductPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<SingleProductPage />} />
          <Route
            path="checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;

{
  /* <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/product/:id" children={<SingleProduct />} />
          <PrivateRoute exact path="/checkout">
            <Checkout />
          </PrivateRoute>
          <Route exact path="*">
            <Error />
          </Route> */
}
