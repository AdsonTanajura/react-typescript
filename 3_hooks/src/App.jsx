import './App.css'
import ExemploUseEffect from './components/ExemploUseEffect/ExemploUseEffect'
import Timer from './components/Timer/Timer'
import ComponentFilho from './components/ComponentFilho/ComponentFilho'
import ValorDoContexto from './components/ValorDoContexto/ValorDoContexto'
import { MeuContextoProvider } from './contexts/MeuContexto'

function App() {

  return (
    <>
      <ExemploUseEffect />
      <Timer />
      <MeuContextoProvider>
        <ComponentFilho />
        <ValorDoContexto />
      </MeuContextoProvider>
    </>
  )
}

export default App
