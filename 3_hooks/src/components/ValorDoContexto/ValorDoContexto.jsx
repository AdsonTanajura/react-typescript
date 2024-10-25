import { useContext } from "react";
import { MeuContexto } from "../../contexts/MeuContexto";

const ValorDoContexto = () => {

    const { mensagem, } = useContext(MeuContexto);

  return (
    <div>
        <h1>O valor do meu contexto é {mensagem}</h1>
    </div>
  ) 
}

export default ValorDoContexto;
