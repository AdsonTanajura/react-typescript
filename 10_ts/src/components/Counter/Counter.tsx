import { useState } from 'react';
const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>Contardor</h2>
      <span>Quantas vezes clicou {count}</span>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Clique em mim!!
      </button>
    </div>
  );
};

export default Counter;
