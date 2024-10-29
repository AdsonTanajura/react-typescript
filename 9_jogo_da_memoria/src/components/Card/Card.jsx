const Card = ({ card, onLick }) => {
  console.log(card);
  return (
    <div
      className={`card ${card.isFlipped ? 'flipped' : ''}`}
      onClick={() => onLick(card)}
    >
      {card.isFlipped ? card.value : '?'}
    </div>
  );
};

export default Card;
