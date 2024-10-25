import { useMemo } from "react"
const fibonacci = (n) => {
    if(n <= 1) {
        return n 
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
   }



const CalPesadoEX = ({num}) => {

    const fibResult = useMemo(() => {
        return fibonacci(num)
    }, [num]);

  return (
    <div>
      <h1>Fibonacci de {num} é {fibResult}</h1>
    </div>
  )
}

export default CalPesadoEX
