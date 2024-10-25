import React, { useCallback, useState } from "react"

const Botao = React.memo(({ onClick, children }) => {
    return <button onClick={onClick}>{children}</button>;
});

Botao.displayName = "Botao";

const ContadorCallback = () => {
    const [number, setNumber] = useState(0);

    const handleClick = useCallback(() => {
        setNumber((prevNumber) => prevNumber + 1);
    }, []);

  return (
    <div>
        <p>Contagem: {number}</p>
        <Botao onClick= {handleClick}>
            Incrementar
        </Botao>
    </div>
  )
}

export default ContadorCallback
