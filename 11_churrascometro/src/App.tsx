import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculadora from './pages/Calculadora/Calculadora';
import Resultado from './pages/Resultado/Resultado';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculadora />} />
        <Route path="/result" element={<Resultado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
