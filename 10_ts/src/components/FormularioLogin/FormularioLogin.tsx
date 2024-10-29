import React, { useEffect, useState } from 'react';

const FormularioLogin = () => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && password) {
      return alert('Nome e senha enviado com sucesso');
    } else {
      return alert('Digite o email e a senha pfv');
    }
  };

  useEffect(() => {
    console.log(name);
    console.log(password);
  }, [name, password]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Nome"></label>
        <input
          type="text"
          value={name}
          placeholder="Digite o nome"
          onChange={handleNameInput}
        />
        <label htmlFor="Senha"></label>
        <input
          type="password"
          value={password}
          placeholder="Digite a senha"
          onChange={handlePasswordInput}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioLogin;
