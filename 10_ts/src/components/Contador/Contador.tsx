import { useReducer } from 'react';
import { counterReducer } from '../../reducers/counterReducer';

const Contador = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Aumentar</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Diminuir</button>
    </div>
  );
};

export default Contador;
