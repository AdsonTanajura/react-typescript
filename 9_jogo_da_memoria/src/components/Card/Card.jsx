import Board from '../Board/Board';
import { useState } from 'react';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};
const generateCards = () => {
  const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const cards = values.map((value) => ({
    value,
    isFlipped: false,
  }));
  const duplicatedCards = cards
    .concat([...cards])
    .map((card, index) => ({ ...card, index }));

  return shuffleArray(duplicatedCards);
};

generateCards();

const Card = () => {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [chances, setChances] = useState(6);

  return (
    <div className="game">
      <Board />
    </div>
  );
};

export default Card;
