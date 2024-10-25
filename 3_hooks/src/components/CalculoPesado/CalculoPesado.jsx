import { useMemo } from "react"

const CalculoPesado = ({numero}) => {
    const resultadoCalculoPesado = useMemo(() => {
        return operacaoPesada(numero)
    }, [numero])

  return (
    <div>
        Resultado: {resultadoCalculoPesado}
    </div>
  )
}

const operacaoPesada = (num) => {
    console.log("Realizando Operacao")
    return num * 10000;
}

export default CalculoPesado
