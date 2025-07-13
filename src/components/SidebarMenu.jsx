import { useState } from 'react';
import { X ,Sun} from 'lucide-react';

const categories = ['All', 'Flowers', 'Fruits', 'Tools', 'Seeds', 'Cactus'];

export default function SidebarMenu({ selected, onSelect, isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
          <aside className="absolute top-0 left-0 h-full w-64 bg-gray-900 text-white p-6 space-y-4 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Categories</h2>
              <button onClick={onClose} className="text-white">
                <X />
              </button>
            </div>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  onSelect(cat);
                  onClose();
                }}
                className={`w-full text-left px-4 py-2 rounded-md border transition ${
                  selected === cat
                    ? 'bg-cyan-600 text-white border-cyan-500'
                    : 'bg-gray-800 text-cyan-300 border-cyan-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </aside>
        </div>
      )}
    </>
  );
}
