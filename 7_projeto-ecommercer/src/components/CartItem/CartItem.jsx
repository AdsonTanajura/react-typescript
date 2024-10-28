const CartItem = ({ item, onUpdateCart }) => {
  console.log('onUpdateCart:', onUpdateCart); // Verifique se está definido
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <div>
        <input
          type="text"
          value={item.quantity}
          onChange={(e) => onUpdateCart(item, parseInt(e.target.value))}
        />
        <button>Remover</button>
      </div>
    </div>
  );
};

export default CartItem;
