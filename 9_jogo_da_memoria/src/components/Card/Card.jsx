const Card = ({ card }) => {
  return (
    <div className={`card ${card.isFlipper ? 'flipped' : ''}`}>
      {card.isFlipper ? card.value : '?'}
    </div>
  );
};

export default Card;
