import { useEffect, useState } from 'react';
import { Puzzle } from 'lucide-react';
import { Link } from 'react-router-dom';
import FallingLeavesCanvas from './FallingLeavesCanvas';

const emojiSet = ['🌼', '🍀', '🌸', '🌻', '🍃', '🌹'];

export default function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    const emoji = emojiSet[Math.floor(Math.random() * emojiSet.length)];
    const newCards = [
      { id: 1, emoji, flipped: false },
      { id: 2, emoji, flipped: false },
    ].sort(() => 0.5 - Math.random());
    setCards(newCards);
    setFlipped([]);
    setMatched(false);
  }, [isOffline]);

  const handleFlip = (index) => {
    if (flipped.includes(index) || matched) return;
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);
    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);

    if (newFlipped.length === 2) {
      setTimeout(() => {
        if (cards[newFlipped[0]].emoji === cards[newFlipped[1]].emoji) {
          setMatched(true);
        } else {
          newCards[newFlipped[0]].flipped = false;
          newCards[newFlipped[1]].flipped = false;
          setCards([...newCards]);
        }
        setFlipped([]);
      }, 800);
    }
  };

  if (!isOffline) return null;

  return (
    <>
    <FallingLeavesCanvas />
    <div className="relative z-10">
         <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-4 rounded-lg shadow-md m-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <Puzzle className="text-yellow-600 animate-bounce" />
          <div>
            <p className="font-bold">You're offline!</p>
            <p className="text-sm">Match the cards to unlock full game 🌿</p>
          </div>
        </div>
      </div>

      {/* Mini Game Grid */}
      <div className="grid grid-cols-2 gap-2 w-24 mx-auto my-3">
        {cards.map((card, i) => (
          <div
            key={card.id}
            onClick={() => handleFlip(i)}
            className="w-10 h-10 text-2xl flex items-center justify-center border border-yellow-400 rounded cursor-pointer bg-white hover:bg-yellow-50"
          >
            {card.flipped || matched ? card.emoji : '❓'}
          </div>
        ))}
      </div>

      {matched && (
        <div className="text-center mt-3">
          <Link
            to="/game"
            className="bg-green-600 text-white px-3 py-1 rounded shadow hover:bg-green-700 transition"
          >
            🎉 Play Full Game
          </Link>
        </div>
      )}
    </div>
      </div>
    </>
   
  );
}
