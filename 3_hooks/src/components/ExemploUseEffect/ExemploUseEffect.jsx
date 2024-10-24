import { useEffect, useState } from "react"

const ExemploUseEffect = () => {
    const [contador, setContador] = useState(0);
    useEffect(() => {
        document.title = `Você clicou ${contador} vezes`
    }, [contador]);
  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
    </div>
  )
}

export default ExemploUseEffect
