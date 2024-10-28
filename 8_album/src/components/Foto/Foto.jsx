const Foto = ({ dados, setFotoAmpliada }) => {
  return (
    <div
      className="foto"
      onClick={() => {
        setFotoAmpliada(dados);
      }}
    >
      {dados && dados.urls && dados.urls.small ? (
        <img src={dados.urls.small} alt={dados.alt_description || 'Imagem'} />
      ) : (
        <p>Imagem não disponível</p>
      )}
    </div>
  );
};

export default Foto;
