import './App.css'
import ExemploUseEffect from './components/ExemploUseEffect/ExemploUseEffect'
import Timer from './components/Timer/Timer'
import ComponentFilho from './components/ComponentFilho/ComponentFilho'
import ValorDoContexto from './components/ValorDoContexto/ValorDoContexto'
import { MeuContextoProvider } from './contexts/MeuContexto'
import Contador from './components/Contador/Contador'

function App() {

  return (
    <>
      <ExemploUseEffect />
      <Timer />
      <MeuContextoProvider>
        <ComponentFilho />
        <ValorDoContexto />
      </MeuContextoProvider>

      <Contador />
    </>
  )
}

export default App
