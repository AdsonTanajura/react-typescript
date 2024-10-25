import { useEffect, useState, useCallback } from "react"



const SincronizarDados = () => {

    const [number, setNumber] = useState(0);

    const handleClick = useCallback(() => {
        setNumber((prevNumber) => prevNumber + 1)
    }, [])

    useEffect(() => {
        document.title = `Você clicou no botao ${number} vezes`;
    }, [number])

  return (
    <div>
      <h1>Olhe o nume da pagina!</h1>
      <button onClick={handleClick}>
        Clique aqui!
      </button>
    </div>
  )
}

export default SincronizarDados
