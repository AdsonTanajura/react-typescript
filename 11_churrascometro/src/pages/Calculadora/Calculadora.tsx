import bgImage from '../../assets/bg-1.jpg';
import CalculadoraChurrasco from '../../components/CalculadoraChurrasco/CalculadoraChurrasco';

const Calculadora = () => {
  return (
    <div
      className="page-container"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}
    >
      <h1>Calculadora de Churraco</h1>
      <CalculadoraChurrasco />
    </div>
  );
};

export default Calculadora;
