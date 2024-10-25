import useWindowSize from "../../hooks/useWindowSize"

const DisplayWindowSize = () => {
    const {height, width} = useWindowSize()
  return (
    <div>
        <h2>Sua tela esta na altura: {height}</h2>
        <h2>Sua tela esta na largura: {width}</h2>
    </div>
  )
}

export default DisplayWindowSize
