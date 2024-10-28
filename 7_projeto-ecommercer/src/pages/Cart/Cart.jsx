import CartItem from '../../components/CartItem/CartItem';

const Cart = ({ cartItems = [], onUpdateCart }) => {
  console.log(cartItems);
  return (
    <div>
      <h1>Carrinho</h1>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} onUpdateCart={onUpdateCart} />
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
