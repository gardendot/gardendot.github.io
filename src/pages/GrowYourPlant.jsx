import { useState, useEffect } from 'react'
import seedImg from '/assets/stage-seed.png'
import sproutImg from '/assets/stage-sprout.png'
import leafImg from '/assets/stage-leaf.png'
import bloomImg from '/assets/stage-bloom.png'

const stages = [
  { label: 'Seed', img: seedImg, threshold: 0 },
  { label: 'Sprout', img: sproutImg, threshold: 10 },
  { label: 'Leaf', img: leafImg, threshold: 30 },
  { label: 'Bloom', img: bloomImg, threshold: 60 },
]

export default function GrowYourPlant() {
  const [clicks, setClicks] = useState(() => parseInt(localStorage.getItem('growClicks')) || 0)

  useEffect(() => {
    localStorage.setItem('growClicks', clicks)
  }, [clicks])

  const currentStage = stages.reduce((prev, curr) => (clicks >= curr.threshold ? curr : prev))

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-cyan-100 to-cyan-300 text-center p-4">
      <h1 className="text-3xl font-bold mb-4">🌱 Grow Your Plant</h1>
      <p className="mb-2">Stage: <strong>{currentStage.label}</strong></p>
      <img src={currentStage.img} alt={currentStage.label} className="w-48 h-48 mb-4 transition-transform duration-500 hover:scale-105" />
      <button
        onClick={() => setClicks(clicks + 1)}
        className="bg-cyan-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-cyan-700 transition-all"
      >
        💧 Water ({clicks})
      </button>
      {clicks >= 60 && (
        <>
          <p className="mt-4 text-lg text-cyan-800 font-semibold">Your plant is fully bloomed! 🎉</p>
          <button onClick={() => setClicks(0)} className="mt-2 text-sm underline text-cyan-700">Reset</button>
        </>
      )}
    </div>
  )
}
