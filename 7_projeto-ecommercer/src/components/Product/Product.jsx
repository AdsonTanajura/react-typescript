import { useState } from 'react';
const Product = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <div className="cart-buttons">
        <select name="" id="">
          <option value="">1</option>
        </select>
        <button onClick={() => onAddToCart(product, quantity)}>
          Adiconar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default Product;
