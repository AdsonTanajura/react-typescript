import CartItem from '../../components/CartItem/CartItem';

const Cart = ({ cartItems = [], onUpdateCart, onRemoveFromCart }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div>
      <h1>Carrinho</h1>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
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
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
