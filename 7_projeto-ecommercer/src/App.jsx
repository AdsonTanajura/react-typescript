import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog/Catalog';
import Cart from './pages/Cart/Cart';
import Thanks from './pages/Thanks/Thanks';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to={'/'}>Catalogo</Link>
        <Link to={'/cart'}>Carrinho</Link>
        <Link></Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
