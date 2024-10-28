import { useState, useEffect } from 'react';
import productData from '../../data/products_mock.json';
import Product from '../../components/Product/Product';
const Catalog = () => {
  return (
    <div>
      <h1>Catálogo de Produtos</h1>
      <div className="product-container">
        {productData.map((produto) => (
          <Product key={produto.id} product={produto} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
