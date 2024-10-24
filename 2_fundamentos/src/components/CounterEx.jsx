import { useState } from "react"

const CounterEx = () => {
    const [cont, setCont] = useState(0);
    if(cont < 0) {
       setCont( cont + 1)
    };
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '8px',
        backgroundColor: '#61d4b0',
        color: '#e8ff65',
    }}>
        <h1>Clique no botao!!</h1>
        {!(cont === 0) ? <span>Você clicou {cont} vezes no botao</span> : null}
        <button 
        style={{
            width: '50%',
            color: '#baf77c',
            backgroundColor: '#5a5c75',
        }} 
        onClick={() => setCont(cont + 1)}>
            Clique em mim
        </button>
        <button onClick={() => setCont(cont - 1)}>Desclique em mim</button>
    </div>
  )
}

export default CounterEx;
