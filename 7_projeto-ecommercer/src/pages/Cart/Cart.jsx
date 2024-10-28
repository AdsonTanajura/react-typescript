const Cart = ({ cartItems = [] }) => {
  console.log(cartItems);
  return (
    <div>
      <h1>Carrinho</h1>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
