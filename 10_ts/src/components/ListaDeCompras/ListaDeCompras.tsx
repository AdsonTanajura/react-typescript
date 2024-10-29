import React, { useState } from 'react';

const ListaDeCompras = () => {
  const [itemList, setItemList] = useState<string[]>([]);
  const [item, setItem] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setItemList((prevntItem) => [...prevntItem, item]);
    setItem('');
  };
  return (
    <div>
      <h1>Lista de compras</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          onChange={handleChange}
          placeholder="Digite um item para lista de compras"
        />
        <button type="submit">Adicionar</button>
        <ul>
          {itemList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default ListaDeCompras;
