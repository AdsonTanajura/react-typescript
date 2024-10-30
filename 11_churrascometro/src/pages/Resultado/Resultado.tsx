import bgImage from '../../assets/bg-2.jpg';
import ResultadoChurrasco from '../../components/ResultadoChurrasco/ResultadoChurrasco';
const Resultado = () => {
  return (
    <div
      className="page-container"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}
    >
      <ResultadoChurrasco />
    </div>
  );
};

export default Resultado;
