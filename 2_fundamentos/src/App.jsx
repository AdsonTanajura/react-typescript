import './App.css'
import BomDia from './components/BomDia'
import Cachorro from './components/Cachorro'
import Descricao from './components/Descricao'
import Pai from './components/Pai'
import Welcome from './components/Welcome'

const App = () => {

  return (
    <>
    <Welcome />
    <BomDia />
    <Pai />
    <Descricao nome={'Adson'} idade={22}/>
    <Cachorro nome={'Osvaldo'} raca={'PAPA'}/>
    </>
  )
}

export default App
