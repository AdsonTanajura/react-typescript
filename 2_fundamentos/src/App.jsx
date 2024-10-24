import './App.css'
import BomDia from './components/BomDia'
import BotaoAzul from './components/BotaoAzul'
import BotaoEstilizado from './components/BotaoEstilizado'
import Cachorro from './components/Cachorro'
import Counter from './components/Counter'
import Descricao from './components/Descricao'
import Form from './components/Form'
import LoginButton from './components/LoginButton'
import NumberList from './components/NumberList'
import Pai from './components/Pai'
import PaiFuncao from './components/PaiFuncao'
import RenderCondicional from './components/RenderCondicional'
import UserInfoForm from './components/UserInfoForm'
import Warning from './components/Warning'
import Welcome from './components/Welcome'

const App = () => {

  return (
    <>
    <Welcome />
    <BomDia />
    <Pai />
    <Descricao nome={'Adson'} idade={22}/>
    <Cachorro nome={'Osvaldo'} raca={'PAPA'}/>
    <Counter />
    <UserInfoForm />
    <PaiFuncao />
    <Form />
    <RenderCondicional user={'Adson'}/>
    <LoginButton loggedIn={true}/>
    <LoginButton loggedIn={false}/>
    <Warning warning={true}/>
    <NumberList numbers={[1,2,3,4,5,6,7]}/>
    <BotaoEstilizado />
    <BotaoAzul />
    </>
  )
}

export default App
