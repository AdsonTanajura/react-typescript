import { useReducer } from "react"

const inicialState = {contador: 0};
const reducer = (estado, acao) => {
    if (acao.tipo === 'incrementar') {
        return {contador: estado.contador + 1};
    } else if (acao.tipo === 'decrementar') {
        return {contador: estado.contador - 1};
    } else if (acao.tipo === 'resetar') {
        return {contador: 0};
    } else {
        throw new Error("Acao nao suportada");
    }
}
const Contador = () => {

    const [estado, dispatch] = useReducer(reducer, inicialState);

  return (
    <div>
        <p>Contagem: {estado.contador}</p>
        <button onClick={() => dispatch({tipo: 'incrementar'})}>Incrementar</button>
        <button onClick={() => dispatch({tipo: 'decrementar'})}>Descrementar</button>
        <button onClick={() => dispatch({tipo: 'resetar'})}>Resetar</button>
    </div>
  )
}

export default Contador
