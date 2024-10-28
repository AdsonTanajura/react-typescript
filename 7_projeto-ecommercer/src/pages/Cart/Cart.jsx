import CartItem from '../../components/CartItem/CartItem';
import CheckoutButton from '../../components/CheckoutButton/CheckoutButton';

const Cart = ({
  cartItems = [],
  onUpdateCart,
  onRemoveFromCart,
  setCartItems,
}) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div>
      <h1>Carrinho</h1>
      {cartItems.length === 0 ? (
        <>
          <p>O carrinho está vazio.</p>
        </>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateCart={onUpdateCart}
              onRemoveFromCart={onRemoveFromCart}
            />
          ))}
          <div className="total">
            <p>Total ${totalPrice}</p>
            <CheckoutButton cartItems={cartItems} setCartItems={setCartItems} />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
