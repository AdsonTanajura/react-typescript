import Card from '../Card/Card';

const Board = ({ cards, onCardLick }) => {
  return (
    <div className="board">
      {cards.map((card) => (
        <Card key={card.id} card={card} onLick={onCardLick} />
      ))}
    </div>
  );
};

export default Board;
