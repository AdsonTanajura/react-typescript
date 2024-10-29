import BarraFerramentas from './components/BarraFerramentas/BarraFerramentas';
import Contador from './components/Contador/Contador';
import ContadorIntervalo from './components/ContadorIntervalo/ContadorIntervalo';
import Counter from './components/Counter/Counter';
import FormularioLogin from './components/FormularioLogin/FormularioLogin';
import Greeting from './components/Greeting/Greeting';
import InputEx from './components/InputEx/InputEx';
import ListaDeCompras from './components/ListaDeCompras/ListaDeCompras';
import TextInput from './components/TextInput/TextInput';
import { TemaProvider } from './contexts/TemaContext';

function App() {
  return (
    <>
      <div>
        <h1>React com TS</h1>
        <Greeting name={'Adson'} />
        <Counter />
        <TextInput />
        <ContadorIntervalo />
        <FormularioLogin />

        <ListaDeCompras />

        <InputEx />

        <Contador />
        <TemaProvider>
          <BarraFerramentas />
        </TemaProvider>
      </div>
    </>
  );
}

export default App;
