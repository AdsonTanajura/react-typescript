const RenderCondicional = ({user}) => {

  return (
    <div>
        {user && <h1>Seja muito bem vindo. {user}</h1> } <h1></h1>

    </div>
);
};

export default RenderCondicional;
