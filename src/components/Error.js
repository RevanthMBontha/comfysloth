import React from 'react';
import { useProductsContext } from '../context/products_context';

const Error = () => {
  const { error_message: message } = useProductsContext();
  return (
    <div className="section section-center">
      <h2>There was an error...</h2>
      <p>{message.length > 0 ? message : 'Redirecting to homepage'}</p>
    </div>
  );
};

export default Error;
