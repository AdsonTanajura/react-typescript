import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Catalog from './pages/Catalog/Catalog';
import Cart from './pages/Cart/Cart';
import Thanks from './pages/Thanks/Thanks';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
const App = () => {
  const [cartItem, setCartItem] = useState([]);

  const handleAddCart = (product, quantity) => {
    setCartItem((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        toast.info(`Quantidade do item atualizado ${product.name}`);

        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        toast.success(`${product.name} adicionado com sucesso!`);
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const handleUpdateCart = (product, quantity) => {
    toast.info(`Quantidade do item atualizado ${product.name}`);
    setCartItem((prevItems) => {
      return prevItems.map((item) =>
        item.id === product.id ? { ...item, quantity: quantity } : item
      );
    });
  };

  const handleRemoveFromCart = (product) => {
    toast.error(`${product.name} foi removido com sucesso!`);
    setCartItem((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );
  };
  return (
    <BrowserRouter>
      <nav>
        <Link to={'/'}>Catalogo</Link>
        <Link to={'/cart'}>Carrinho</Link>
        <Link></Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Catalog onAddToCart={handleAddCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItem}
                onUpdateCart={handleUpdateCart}
                onRemoveFromCart={handleRemoveFromCart}
              />
            }
          />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </BrowserRouter>
  );
};

export default App;
