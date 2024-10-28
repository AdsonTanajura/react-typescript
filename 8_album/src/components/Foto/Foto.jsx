const Foto = ({ dados }) => {
  return (
    <div className="foto">
      {dados && dados.urls && dados.urls.small ? (
        <img src={dados.urls.small} alt={dados.alt_description || 'Imagem'} />
      ) : (
        <p>Imagem não disponível</p>
      )}
    </div>
  );
};

export default Foto;
