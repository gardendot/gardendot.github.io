import { useEffect, useState } from 'react';
import MemoryCard from './MemoryCard';

const emojis = ['🌻', '🌸', '🌼', '🌹', '🌺', '🌷', '🌱', '🌵'];

function shuffleArray(array) {
  return [...array, ...array]
    .sort(() => Math.random() - 0.5)
    .map((emoji, index) => ({ id: index, emoji, flipped: false, matched: false }));
}

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);

  useEffect(() => {
    setCards(shuffleArray(emojis));
  }, []);

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (cards[first].emoji === cards[second].emoji) {
        const updated = [...cards];
        updated[first].matched = true;
        updated[second].matched = true;
        setCards(updated);
        setFlipped([]);
      } else {
        setTimeout(() => {
          const updated = [...cards];
          updated[first].flipped = false;
          updated[second].flipped = false;
          setCards(updated);
          setFlipped([]);
        }, 800);
      }
      setMoves((m) => m + 1);
    }
  }, [flipped]);

  useEffect(() => {
    if (cards.length && cards.every(card => card.matched)) {
      setWon(true);
    }
  }, [cards]);

  const handleFlip = (index) => {
    if (flipped.length < 2 && !cards[index].flipped && !cards[index].matched) {
      const updated = [...cards];
      updated[index].flipped = true;
      setCards(updated);
      setFlipped([...flipped, index]);
    }
  };

  const resetGame = () => {
    setCards(shuffleArray(emojis));
    setMoves(0);
    setWon(false);
    setFlipped([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 to-green-800 p-4 text-white text-center">
      <h1 className="text-3xl font-bold mb-4">🌼 Plant Memory Match</h1>
      <p className="mb-2 text-sm">Moves: {moves}</p>

      <div className="grid grid-cols-4 gap-3 max-w-md mx-auto mb-6">
        {cards.map((card, index) => (
          <MemoryCard
            key={card.id}
            emoji={card.emoji}
            flipped={card.flipped || card.matched}
            onClick={() => handleFlip(index)}
          />
        ))}
      </div>

      {won && (
        <div className="bg-white text-green-700 px-4 py-2 rounded shadow font-bold">
          🎉 You matched all plants in {moves} moves!
          <button onClick={resetGame} className="ml-4 underline text-cyan-600">Play Again</button>
        </div>
      )}
    </div>
  );
}
