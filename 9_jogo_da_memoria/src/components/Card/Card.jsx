const Card = ({ card }) => {
  return (
    <div className={`card ${card.isFlipper ? 'flipped' : ''}`}>
      {card.value}
    </div>
  );
};

export default Card;
