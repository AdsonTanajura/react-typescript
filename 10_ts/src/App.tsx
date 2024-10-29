import ContadorIntervalo from './components/ContadorIntervalo/ContadorIntervalo';
import Counter from './components/Counter/Counter';
import Greeting from './components/Greeting/Greeting';
import TextInput from './components/TextInput/TextInput';

function App() {
  return (
    <>
      <div>
        <h1>React com TS</h1>
        <Greeting name={'Adson'} />
        <Counter />
        <TextInput />
        <ContadorIntervalo />
      </div>
    </>
  );
}

export default App;
