const Greeting = ({name}) => {
    if(!name) {
        return null;
    };
  return (
    <div>
        Bem vindo {name}!!
    </div>
  )
}

export default Greeting
