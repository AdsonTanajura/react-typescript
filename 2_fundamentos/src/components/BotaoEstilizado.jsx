const BotaoEstilizado = () => {
    const estiloBotao = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "##fb6900",
        color: "#004853",
        padding: "20px",
        borderRadius: '8px'
    }
  return (
    <button style={estiloBotao}>Oi eu sou um botao com estilo</button>
  )
}

export default BotaoEstilizado
