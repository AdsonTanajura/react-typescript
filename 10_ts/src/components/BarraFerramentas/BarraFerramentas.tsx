import { useContext } from 'react';
import { TemaContext } from '../../contexts/TemaContext';

const BarraFerramentas = () => {
  const contextoTema = useContext(TemaContext);
  if (!contextoTema) {
    return null;
  }
  return (
    <div
      style={{
        backgroundColor: contextoTema.tema === 'claro' ? '#fff' : '#000',
        color: contextoTema.tema === 'claro' ? '#000' : '#fff',
      }}
    >
      <button onClick={contextoTema.alteraTema}>Altera tema</button>
    </div>
  );
};

export default BarraFerramentas;
