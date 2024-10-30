import { useLocation, useNavigate } from 'react-router-dom';
import { Alimento, nomesAlimentos, quantidadesPorPessoa } from '../../types';

import styles from './ResultadoChurrasco.module.css';

type ResultadosChurrasco = {
  pessoas: number;
  alimentosSelecionados: Alimento[];
};

const ResultadoChurrasco = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as ResultadosChurrasco;

  const totalPorAlimento = state.alimentosSelecionados.reduce(
    (acc, alimento) => {
      acc[alimento] = (quantidadesPorPessoa[alimento] * state.pessoas) / 1000; // Convertendo para kg
      return acc;
    },
    {} as Record<Alimento, number>
  );

  const reiniciar = () => {
    navigate('/');
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Resultado para {state.pessoas} pessoas:</h2>
      {state.alimentosSelecionados.map((alimento) => (
        <p key={alimento} className={styles.resultText}>
          {nomesAlimentos[alimento]}: {totalPorAlimento[alimento]} kg
        </p>
      ))}
      <button onClick={reiniciar} className={styles.resetButton}>
        Reiniciar
      </button>
    </div>
  );
};

export default ResultadoChurrasco;