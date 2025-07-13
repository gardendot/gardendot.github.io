export default function MemoryCard({ emoji, flipped, onClick }) {
  return (
    <div
      className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl 
                  rounded-xl cursor-pointer transform transition-transform duration-300
                  ${flipped ? 'bg-white text-green-800' : 'bg-emerald-700 hover:bg-emerald-600'}`}
      onClick={onClick}
    >
      {flipped ? emoji : '❓'}
    </div>
  );
}
