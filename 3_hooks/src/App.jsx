import './App.css'
import ExemploUseEffect from './components/ExemploUseEffect/ExemploUseEffect'
import Timer from './components/Timer/Timer'
import ComponentFilho from './components/ComponentFilho/ComponentFilho'
import ValorDoContexto from './components/ValorDoContexto/ValorDoContexto'
import { MeuContextoProvider } from './contexts/MeuContexto'
import Contador from './components/Contador/Contador'
import DisplayWindowSize from './components/DisplayWindowSize/DisplayWindowSize'
import Container from './components/Container/Container'

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
      <DisplayWindowSize />
      <Container>
        <h1>Estou em uma Div</h1>
        <p>Eu tambem</p>
        <Contador />
      </Container>
    </>
  )
}

export default App
