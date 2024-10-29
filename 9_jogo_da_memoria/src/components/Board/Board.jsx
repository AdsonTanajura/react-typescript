import Card from '../Card/Card';

const Board = ({ cards }) => {
  return (
    <div className="bord">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Board;
