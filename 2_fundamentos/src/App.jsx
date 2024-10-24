import './App.css'
import BomDia from './components/BomDia'
import BotaoAzul from './components/BotaoAzul'
import BotaoEstilizado from './components/BotaoEstilizado'
import Cachorro from './components/Cachorro'
import Counter from './components/Counter'
import CounterEx from './components/CounterEx'
import Descricao from './components/Descricao'
import Form from './components/Form'
import Greeting from './components/Greeting'
import LoginButton from './components/LoginButton'
import NumberList from './components/NumberList'
import Pai from './components/Pai'
import PaiFuncao from './components/PaiFuncao'
import RenderCondicional from './components/RenderCondicional'
import TaskList from './components/TaskList'
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
    {/* Execericios */}
    <Greeting name={'Adson'} /> 
    <CounterEx />
    <TaskList tasks={[
  { id: 1, task: "Estudar JavaScript" },
  { id: 2, task: "Criar layout em Tailwind CSS" },
  { id: 3, task: "Configurar servidor com Node.js" },
  { id: 4, task: "Revisar código do projeto Kanban" },
  { id: 5, task: "Desenvolver novo recurso no jogo da velha" }
]}/> 
    <TaskList />
    </>
  )
}

export default App
