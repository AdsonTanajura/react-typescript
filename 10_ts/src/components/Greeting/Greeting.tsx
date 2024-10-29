type GreetingProps = {
  name: string;
};

const Greeting = ({ name }: GreetingProps) => {
  return <div>Bem vindo {name}</div>;
};

export default Greeting;
