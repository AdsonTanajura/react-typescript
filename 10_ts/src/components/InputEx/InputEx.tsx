import useLocalStorage from '../../hooks/useLocalStorage';

const InputEx = () => {
  const [nome, setNome] = useLocalStorage('nome', '');

  return (
    <div>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <p>O nome armazenando é {nome}</p>
    </div>
  );
};

export default InputEx;
