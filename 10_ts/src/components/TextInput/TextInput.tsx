import React, { useState } from 'react';

const TextInput = () => {
  const [text, setText] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log('Formulario enviado');
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <p>{text}</p>
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default TextInput;
