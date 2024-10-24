import './App.css'
import BomDia from './components/BomDia'
import Cachorro from './components/Cachorro'
import Counter from './components/Counter'
import Descricao from './components/Descricao'
import Form from './components/Form'
import LoginButton from './components/LoginButton'
import Pai from './components/Pai'
import PaiFuncao from './components/PaiFuncao'
import RenderCondicional from './components/RenderCondicional'
import UserInfoForm from './components/UserInfoForm'
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
    </>
  )
}

export default App
