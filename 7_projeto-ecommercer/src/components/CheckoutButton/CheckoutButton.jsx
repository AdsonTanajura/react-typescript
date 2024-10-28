import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CheckoutButton = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const handleCheckou = () => {
    if (cartItems.length > 0) {
      toast.success('Compra Finalizada com sucesso!');
      navigate('/thanks', { state: { cartItems } });
      setCartItems([]);
    } else {
      toast.error('Seu carrinho esta vazio');
    }
  };

  return <button onClick={handleCheckou}>Finaliza Compra</button>;
};

export default CheckoutButton;
