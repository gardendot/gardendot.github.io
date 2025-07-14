import { useEffect, useState } from 'react';
import MemoryCard from './MemoryCard';
import { Share2 } from 'lucide-react'
import Header from '../components/Header';
import Footer from '../components/Footer';

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

  const handleShare = async () => {
    const shareText = `🌿 I completed the Plant Memory Match Game in ${moves} moves! Try it here: `
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Plant Memory Match on G.',
          text: shareText,
          url: window.location.href
        })
      } catch (err) {
        alert('Sharing failed 😢')
      }
    } else {
      // fallback
      navigator.clipboard.writeText(shareText)
      alert('Game result copied! Paste it to share. ✅')
    }
  }

  return (
    <div     className="min-h-screen bg-gradient-to-b from-cyan-900 to-emerald-800  ">
    
<Header  hideMenu hideCart />
    <div className=" p-4 text-white text-center">
      
      <h1 className="text-2xl font-bold my-4">🌼 Plant Memory Match</h1>
      <p className="mb-2 text-sm">Moves: {moves}</p>

      <div className="grid grid-cols-4 gap-3 max-w-md mx-auto mb-6" style={{justifyItems: 'center'}}>
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
        <div className="bg-white text-cyan-700 px-4 py-2 rounded shadow font-bold flex flex-col gap-4 items-center">
          🎉 You matched all plants in {moves} moves!
          <button onClick={resetGame} className="ml-4 underline text-cyan-600">Play Again</button>
          <button
            onClick={handleShare}
            className="flex justify-center items-center gap-1 bg-green-600 text-white px-4 py-1.5 rounded hover:bg-green-700 transition lg:hidden"
          >
            <Share2 size={18} /> Share Score
          </button>
        </div>
      )}



      <hr className="my-6 border-gray-400 opacity-30" />

      <div className="max-w-3xl mx-auto  text-left text-sm text-white-500 dark:text-white-400 p-4 px-8   leading-relaxed">
        <h3 className="font-semibold text-base text-cyan-600 mb-1">📘 How to Play</h3>
        <ul className="list-disc list-inside">
          <li>Tap two tiles to flip them over.</li>
          <li>If they match, they stay visible.</li>
          <li>If not, they flip back.</li>
          <li>Try to match all pairs in the fewest moves!</li>
        </ul>
      </div>
     
    </div>
     <Footer/>
    </div>
  );
}
