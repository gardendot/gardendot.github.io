import { Menu, ShoppingCart, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header({ count = 0, onCartClick, onMenuClick, hideMenu = false, hideCart = false }) {
  return (
    <header className="bg-gradient-to-r from-cyan-800 via-green-900 to-cyan-800 text-white px-5 py-3 shadow-md rounded-b-3xl flex items-center justify-between border-b border-green-700">
      
      {/* Left: Menu Button */}
      {!hideMenu ? (
        <button
          onClick={onMenuClick}
          className="text-white hover:text-emerald-300 transition"
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      ) : (
        <div className="w-6" /> // Spacer if no menu button
      )}

      {/* Center: Logo */}
      <Link to="/" className="text-2xl font-extrabold flex items-center gap-1 tracking-widest group">
        <span className="bg-white text-emerald-800 rounded-full w-8 h-8 flex items-center justify-center font-mono shadow-md transition-transform group-hover:scale-105">
          G
        </span>
        <span className="text-cyan-300 animate-bounce text-3xl">.</span>
      </Link>

      {/* Right: Cart */}
      <div className="relative flex items-center gap-4">
        {!hideCart ? (
        <button
          onClick={onCartClick}
          className="relative flex items-center hover:text-cyan-200 transition"
          aria-label="Open cart"
        >
          <ShoppingCart size={22} />
          <Leaf size={16} className="ml-1 text-lime-300" />
          {count > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full shadow-md font-bold">
              {count}
            </span>
          )}
        </button>
      ) : (
        <div className="w-6" /> 
      )}


        
      </div>
    </header>
  );
}
